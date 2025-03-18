# REST API

A **REST API** (Representational State Transfer Application Programming Interface) is a set of rules and conventions that allows different software applications or systems to communicate with each other over the internet.

### Key Concepts

- **Stateless**: Each request is independent, meaning the server does not store information about previous requests. Each request must contain all necessary information.
- **Resource-Based**: Everything in REST is considered a "resource," and resources are identified using URLs. For example, a user could be a resource at `http://api.example.com/users/1`.
- **Uses HTTP**: REST APIs use standard HTTP methods for communication (GET, POST, PUT, DELETE).
- **Data Formats**: Data is typically exchanged in **JSON** (JavaScript Object Notation) format, but **XML** is also used.

### Common HTTP Methods in REST APIs

1. **GET** – Retrieve data from the server (e.g., get user details).
2. **POST** – Send new data to the server to create a resource (e.g., create a new user).
3. **PUT** – Update existing data on the server (e.g., update user information).
4. **DELETE** – Remove data from the server (e.g., delete a user).

---

# API (Application Programming Interface)

An **API** is a software intermediary that allows two applications or systems to communicate with each other. It defines the methods and data formats that applications can use to request and exchange data.

### Key Points:

- It provides a way for software components to interact without needing to understand each other's internal workings.
- APIs can be used for both local (within a system) and remote (across a network) interactions.

---

# Web Service

A **Web Service** is a specific type of internet-based software that allows applications to communicate using standardized messaging protocols like HTTP/S.

### Characteristics:

- Web services are typically hosted on a web server and made available for clients or other web-based programs to use.
- They follow protocols such as **SOAP** (Simple Object Access Protocol) or **REST** for communication.

---

# Web Service vs API

While both APIs and Web Services allow systems to communicate, there are some important differences:

- **Network Dependency**:
  - **Web Services**: Always require a network connection (typically over HTTP/S).
  - **APIs**: Can work over a network or locally. APIs can be used in scenarios where a network connection is not required.
- **Protocol**:

- **Web Services**: Typically use standardized protocols like **SOAP** (Simple Object Access Protocol) or follow architectural styles like **REST** (Representational State Transfer).

  - SOAP is a protocol for exchanging structured information, commonly used in web services.

  - **APIs**: Can use a variety of protocols such as HTTP, WebSockets, or others depending on the application's needs.

- **Communication**:
  - **Web Services**: Primarily designed to allow communication between applications over the web, often in enterprise or cloud environments.
  - **APIs**: Broader in scope and can be used for any communication between systems, both over the web and within local environments.
