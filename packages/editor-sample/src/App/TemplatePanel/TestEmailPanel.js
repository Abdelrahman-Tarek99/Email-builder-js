var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState } from 'react';
import { CodeOutlined, SendOutlined } from '@mui/icons-material';
import { Alert, Box, Button, CircularProgress, Paper, Stack, Tab, Tabs, TextField, Typography, } from '@mui/material';
import { Reader, renderToStaticMarkup } from '@usewaypoint/email-builder';
import { useDocument } from '../../documents/editor/EditorContext';
export default function TestEmailPanel() {
    const document = useDocument();
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('Test Email from EmailBuilder.js');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    const handleSendTestEmail = () => __awaiter(this, void 0, void 0, function* () {
        if (!email) {
            setMessage({ type: 'error', text: 'Please enter an email address' });
            return;
        }
        if (!email.includes('@')) {
            setMessage({ type: 'error', text: 'Please enter a valid email address' });
            return;
        }
        setIsLoading(true);
        setMessage(null);
        try {
            // Generate HTML from the document
            const htmlContent = generateEmailHTML();
            // For demo purposes, we'll simulate sending an email
            // In a real implementation, you would integrate with an email service
            yield simulateEmailSending(email, subject, htmlContent);
            setMessage({
                type: 'success',
                text: `Test email sent successfully to ${email}! Check your inbox.`
            });
            setEmail('');
        }
        catch (error) {
            setMessage({
                type: 'error',
                text: 'Failed to send test email. Please try again.'
            });
        }
        finally {
            setIsLoading(false);
        }
    });
    const generateEmailHTML = () => {
        try {
            // Use the email builder's renderer to generate proper HTML
            const emailHTML = renderToStaticMarkup(document, { rootBlockId: 'root' });
            return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${subject}</title>
            <style>
              body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
              img { max-width: 100%; height: auto; }
            </style>
          </head>
          <body>
            ${emailHTML}
          </body>
        </html>
      `;
        }
        catch (error) {
            console.error('Error generating HTML:', error);
            return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${subject}</title>
          </head>
          <body>
            <p>Error generating email content. Please check your template.</p>
          </body>
        </html>
      `;
        }
    };
    const getGeneratedHTML = () => {
        return generateEmailHTML();
    };
    const simulateEmailSending = (to, subject, html) => __awaiter(this, void 0, void 0, function* () {
        // Simulate API call delay
        yield new Promise(resolve => setTimeout(resolve, 2000));
        // In a real implementation, you would:
        // 1. Use a service like SendGrid, Mailgun, or your own SMTP server
        // 2. Send the actual email with the generated HTML
        console.log('Sending email to:', to);
        console.log('Subject:', subject);
        console.log('HTML content:', html);
    });
    return (React.createElement(Box, { sx: { p: 3, height: '100%', overflow: 'auto' } },
        React.createElement(Typography, { variant: "h5", gutterBottom: true }, "Test Email"),
        React.createElement(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3 } }, "Send a test email to preview how your template will look in real email clients."),
        React.createElement(Paper, { sx: { p: 3, mb: 3 } },
            React.createElement(Typography, { variant: "h6", gutterBottom: true }, "Email Preview"),
            React.createElement(Tabs, { value: activeTab, onChange: (_, newValue) => setActiveTab(newValue), sx: { mb: 2 } },
                React.createElement(Tab, { label: "Preview", icon: React.createElement(SendOutlined, null) }),
                React.createElement(Tab, { label: "HTML Code", icon: React.createElement(CodeOutlined, null) })),
            activeTab === 0 && (React.createElement(Box, { sx: {
                    border: '1px solid #e0e0e0',
                    borderRadius: 1,
                    p: 2,
                    mb: 3,
                    maxHeight: '300px',
                    overflow: 'auto'
                } },
                React.createElement(Reader, { document: document, rootBlockId: "root" }))),
            activeTab === 1 && (React.createElement(Box, { sx: {
                    border: '1px solid #e0e0e0',
                    borderRadius: 1,
                    p: 2,
                    mb: 3,
                    maxHeight: '300px',
                    overflow: 'auto',
                    bgcolor: '#f5f5f5'
                } },
                React.createElement("pre", { style: {
                        margin: 0,
                        fontSize: '12px',
                        lineHeight: '1.4',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word'
                    } }, getGeneratedHTML())))),
        React.createElement(Stack, { spacing: 3 },
            React.createElement(TextField, { label: "Recipient Email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter email address to send test to", fullWidth: true, required: true }),
            React.createElement(TextField, { label: "Subject Line", value: subject, onChange: (e) => setSubject(e.target.value), placeholder: "Email subject", fullWidth: true }),
            message && (React.createElement(Alert, { severity: message.type, onClose: () => setMessage(null) }, message.text)),
            React.createElement(Button, { variant: "contained", startIcon: isLoading ? React.createElement(CircularProgress, { size: 20 }) : React.createElement(SendOutlined, null), onClick: handleSendTestEmail, disabled: isLoading || !email, fullWidth: true, size: "large" }, isLoading ? 'Sending...' : 'Send Test Email')),
        React.createElement(Box, { sx: { mt: 4, p: 2, bgcolor: 'grey.50', borderRadius: 1 } },
            React.createElement(Typography, { variant: "body2", color: "text.secondary" },
                React.createElement("strong", null, "Note:"),
                " This is a demo implementation. In a production environment, you would integrate with an email service like SendGrid, Mailgun, or your own SMTP server to send actual emails. The HTML tab shows the exact code that would be sent."))));
}
//# sourceMappingURL=TestEmailPanel.js.map