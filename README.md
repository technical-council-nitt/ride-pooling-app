# Ride Pooling App

The **Ride Pooling App** is a web-based (or PWA) application designed to connect travelers who are looking to share rides. Whether you need to get to the same destination or just looking for a travel companion, this app makes it easy for users to find suitable rides, send requests, and share contact details safely.

## Features

### **User Profile**
- **Name** (Required)
- **Sex** (Required)
- **Roll Number** (Optional)

### **Travel Details**
- Pickup location
- Dropoff location
- Preferred departure time (or time range)
- Acceptable time deviations
- Number and sex of accompanying travelers

### **Control Visibility**
- Users can control which contact details are visible to others to ensure privacy.

### **Listing View**
- Users can browse listings in either a card or list view.
- Listings contain the trip details provided by the original poster.

### **Request System**
- Interested users can send requests to the original poster with their basic profile details.
- The listing creator has the option to accept or reject incoming requests.
  - **Accepted requests**: Both users are added to a group, where they can share contact details.
  - **Rejected requests**: The requesting user receives a notification.

## Future Feature Enhancements

- **Preference System**: Users can specify their preferred mode of travel, group size, gender preferences, and other travel preferences.
- **Smart Recommendation Engine**: Suggests suitable trips and groups based on user preferences.
- **Built-in Chat System**: Allows users to communicate without directly sharing personal contact information, similar to OLX.

## Getting Started

### Prerequisites

To run this app locally, you need to have the following installed:

- Node.js
- npm 

### Installation

1. Clone the repository.
2. Run 'npm start'
3. Run the backend separately.