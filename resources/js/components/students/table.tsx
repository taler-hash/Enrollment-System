
import React, { useState, useEffect, useRef } from 'react';
import { DataTable, DataTablePageEvent, DataTableSortEvent, SortOrder } from 'primereact/datatable';
import { Column, ColumnSortEvent } from 'primereact/column';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

interface Student {
    child_name: string,
    student_id: string,
    birth_date: string,
    parent_name: string,
    parent_contact_number: string,
    parent_email_address: string,
    parent_relationship: string
}

interface StudentPagination {
    data: Student[]
    total: number
    current_page: number
    per_page: number,
}

interface ColumnMeta {
    field: string
    header: string
}

interface FilterTypes {
    page?: number
    filter: string
    sort_by: string
    sort_type: SortOrder
}

export default function DynamicColumnsDemo() {
    const [students, setStudents] = useState<StudentPagination>();
    const columns: ColumnMeta[] = [
        {field: 'child_name', header: 'Child Name'},
        {field: 'student_id', header: 'Student ID'},
        {field: 'birth_date', header: 'Birthdate'},
        {field: 'parent_name', header: 'Parent Name'},
        {field: 'parent_contact_number', header: 'Parent Contact Number'},
        {field: 'parent_email_address', header: 'Parent Email Address'},
        {field: 'parent_relationship', header: 'Parent Relationship'}
    ];
    const [filters, setFilters] = React.useState<FilterTypes>({
        page: 1,
        sort_by: 'id',
        sort_type: 0,
        filter: '',
    })
    const [loading, setLoading] = React.useState<boolean>(false)

    const getStudents = async () => {
        setLoading(true)
        const data = await axios.get(route('students.index'), {params: filters});
        setStudents(data.data)
        setLoading(false)
    }
    const toast = useRef<Toast>(null)

    useEffect(() => {
        getStudents()
    }, [filters.page, filters.sort_by, filters.sort_type]);

    function setFilterValue(key: string, value: any) {
        setFilters(prev => {
            return {
                ...prev,
                [key]: value
            }
        })
    }

    function onGlobalFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFilterValue('filter', e.target.value)
    }

    const renderHeader = () => {
        return (
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-wrap gap-2 justify-content-between align-items-center text-xs">
                    <InputText value={filters.filter} onChange={onGlobalFilterChange} placeholder="Search..." />
                    <Button label='Search' onClick={getStudents}/>
                </div>
                <div>
                    <Button label='Export' severity='success' onClick={exportStudents}/>
                </div>
            </div>
        );
    };

    function onPage(event: DataTablePageEvent) {
        setFilterValue('page', event.page as number + 1)
    }

    function onSort(event: DataTableSortEvent) {
        setFilters(prev => {
            return {
                ...prev,
                sort_by: event.sortField ?? 'id',
                sort_type: event.sortOrder
            }
        })
    }

    function exportStudents() {
        toast.current?.show({ severity: 'success', summary: 'Sucess', detail: 'Successfully exported students' });
        window.open(route('students.export'), '_blank')
    }

    return (
        <div className="card">
            <Toast ref={toast} />
            <DataTable 
                loading={loading}
                value={students?.data} 
                rows={students?.per_page}
                totalRecords={students?.total}
                first={students?.current_page}
                onPage={onPage}
                lazy
                paginator
                header={renderHeader}
                onSort={onSort} 
                sortField={filters.sort_by} 
                sortOrder={filters.sort_type}
                removableSort
            >
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} sortable/>
                ))}
            </DataTable>
        </div>
    );
}
        