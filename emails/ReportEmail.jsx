export default function ReportEmail({ name, email, message }) {
  return (
    <div>
      <h2>New Report/Complaint Received</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong><br />{message}</p>
    </div>
  );
}
