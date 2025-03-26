<?php 

namespace App\Exports;

use App\Models\Student;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithEvents;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Events\AfterSheet;

class StudentsExport implements FromCollection, WithHeadings, WithColumnFormatting, WithEvents
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Student::select(
            'child_name', 
            'birth_date', 
            'student_id', 
            'parent_name', 
            'parent_contact_number', 
            'parent_email_address', 
            'parent_relationship'
        )->get();
    }

    /**
     * Define the headers for the columns.
     */
    public function headings(): array
    {
        return [
            'Child Name', 
            'Birthdate', 
            'Student ID', 
            'Parent Name', 
            'Parent Contact Number', 
            'Parent Email Address', 
            'Parent Relationship'
        ];
    }

    /**
     * Define column formats to prevent decimal points.
     */
    public function columnFormats(): array
    {
        return [
            'C' => NumberFormat::FORMAT_NUMBER, 
            'E' => NumberFormat::FORMAT_NUMBER, 
        ];
    }

    /**
     * Auto-size all columns.
     */
    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $sheet = $event->sheet->getDelegate();
                foreach (range('A', 'G') as $column) { 
                    $sheet->getColumnDimension($column)->setAutoSize(true);
                }
            },
        ];
    }
}
