# Email-Scrapper
The Email scraper project is a script that leverages the Gmail API to extract email addresses from Gmail and populate them into a Google Sheet. It provides an advanced method to access email data programmatically and retrieve email addresses with enhanced functionality.

Features and Functionality:

Gmail API Integration: The script utilizes the Gmail API, which offers comprehensive access to Gmail accounts and messages. It leverages the API's capabilities to efficiently retrieve email addresses from Gmail.

User-Friendly Interface: The script adds a custom menu to the Google Sheets interface, allowing users to easily access and initiate the email extraction process.

Gmail Label Selection: Users can specify a Gmail label from which they want to extract email addresses. This enables targeted extraction based on specific labels associated with the email threads or conversations.

Date Filtering: The script includes a date filter functionality using the Gmail API's query syntax. Users can set a starting date to extract email addresses sent from that date onward.

Deduplication: The script eliminates duplicate email addresses using built-in array manipulation functions, ensuring that each address appears only once in the extracted data.

Formatting and Sorting: Extracted email addresses are formatted and displayed in a Google Sheet. The script automatically sorts the email addresses alphabetically based on the email column, enhancing the data's organization and accessibility.
