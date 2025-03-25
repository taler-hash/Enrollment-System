<!DOCTYPE html>
<html>
<head>
    <title>Enrollment Successful</title>
</head>
<body>
    <h1>Congratulations!</h1>
    <p>Dear {{ $child_name }},</p>
    <p>We are pleased to inform you that you have successfully enrolled in our program.</p>
    <p>Here are your enrollment details:</p>
    <ul>
        <li>Student ID: {{ $student_id }}</li>
        <li>Enrollment Date: {{ now() }}</li>
    </ul>
    <p>If you have any questions, feel free to contact us.</p>
    <p>Best regards,</p>
    <p>The Enrollment Team</p>
</body>
</html>