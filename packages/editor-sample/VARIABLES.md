# Using Variables and Merge Tags in EmailBuilder.js

EmailBuilder.js now supports dynamic variables (merge tags) that can be replaced with actual data when sending emails.

## How to Use Variables

### 1. In Text Blocks
- Click on any text block
- Click "Add Variables" button
- Select from common variables like:
  - `{{user.name}}` - User's name
  - `{{user.email}}` - User's email
  - `{{order.id}}` - Order ID
  - `{{order.total}}` - Order total
  - `{{company.name}}` - Company name

### 2. In Buttons
- Click on any button block
- Click "Add Variables" button
- Insert variables in both button text and URL fields

### 3. Manual Entry
You can also manually type variables using the `{{variable.name}}` format.

## Common Variable Examples

### User Information
```
{{user.name}} - User's full name
{{user.email}} - User's email address
{{user.firstName}} - User's first name
{{user.lastName}} - User's last name
```

### Order Information
```
{{order.id}} - Order number
{{order.total}} - Order total amount
{{order.status}} - Order status
{{order.date}} - Order date
```

### Company Information
```
{{company.name}} - Company name
{{company.url}} - Company website
{{company.logo}} - Company logo URL
```

### Product Information
```
{{product.name}} - Product name
{{product.price}} - Product price
{{product.url}} - Product URL
{{product.image}} - Product image URL
```

### Shipping Information
```
{{shipping.tracking}} - Tracking number
{{shipping.tracking_url}} - Tracking URL
{{shipping.address}} - Shipping address
```

### System Variables
```
{{date.current}} - Current date
{{reset.link}} - Password reset link
{{unsubscribe.link}} - Unsubscribe link
```

## Implementation Notes

1. **Template Variables**: These are placeholder variables that need to be replaced with actual data when sending emails.

2. **Data Structure**: When implementing, replace these variables with your actual data structure:
   ```javascript
   const data = {
     user: { name: 'John Doe', email: 'john@example.com' },
     order: { id: '12345', total: '$99.99' },
     company: { name: 'My Company' }
   };
   ```

3. **Email Service Integration**: Most email services support variable replacement:
   - **SendGrid**: Uses `{{variable}}` format
   - **Mailgun**: Uses `%variable%` format
   - **Waypoint**: Uses `{{variable}}` format
   - **Custom**: You can implement your own replacement logic

4. **HTML Safety**: Variables are automatically escaped to prevent XSS attacks.

## Example Usage

### Welcome Email Template
```
Hi {{user.name}},

Welcome to {{company.name}}! Your account has been created with the email {{user.email}}.

Click here to verify your email: {{verify.link}}
```

### Order Confirmation Template
```
Hi {{user.name}},

Your order #{{order.id}} has been confirmed.

Order Total: ${{order.total}}
Tracking: {{shipping.tracking}}

View your order: {{order.url}}
```

## Best Practices

1. **Always provide fallbacks** for optional variables
2. **Test with real data** before sending to users
3. **Keep variable names consistent** across your templates
4. **Document your variable structure** for your team
5. **Use descriptive variable names** that are easy to understand

## Advanced Usage

For more complex scenarios, you can:
- Use nested variables: `{{user.profile.avatar}}`
- Use array indexing: `{{products.0.name}}`
- Use conditional logic (requires custom implementation)
- Use loops for multiple items (requires custom implementation)

## Support

For questions about implementing variables in your email service, check your email provider's documentation or contact support@usewaypoint.com. 