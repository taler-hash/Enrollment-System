<!DOCTYPE html>
<html>
<head>
    <title>Enrollment Successful</title>
</head>
<body>
    <h1>Congratulations!</h1>
    <p>Dear {{ $parent_name }},</p>
    <p>We are pleased to inform that {{ $child_name }} have successfully enrolled.</p>
    <p>Here are your enrollment details:</p>
    <ul>
        <li>Student ID: {{ $student_id }}</li>
        <li>Enrollment Date: {{ Carbon\Carbon::now()->format('F d, Y') }}</li>
    </ul>
    <p>If you have any questions, feel free to contact us.</p>
    <p>Best regards,</p>
    <p>The Enrollment Team</p>
</body>
</html>