import { Html, Text, Heading, Section } from "@react-email/components";

const SupportFeedbackEmail = ({ name, email, feedback }) => (
  <Html>
    <Section>
      <Heading>📬 New Support Feedback</Heading>
      <Text><strong>Name:</strong> {name}</Text>
      <Text><strong>Email:</strong> {email}</Text>
      <Text><strong>Feedback:</strong></Text>
      <Text>{feedback}</Text>
    </Section>
  </Html>
);

export default SupportFeedbackEmail;
