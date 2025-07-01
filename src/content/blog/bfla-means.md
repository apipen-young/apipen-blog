---
title: Before diving into BFLA, let’s clarify what “function” actually means in BFLA
description: Before diving into BFLA, let’s clarify what “function” actually means in BFLA
pubDate: June 25 2025
heroImage: ../../assets/owasp-api-top-10/bfla.png

---
BFLA stands for Broken Function Level Authorization.

Simply put, BFLA involves performing “actions” that go beyond a user’s authorized permissions.

In typical API usage, the term “function” usually refers to an API endpoint with all HTTP methods including GET. However, in the context of BFLA, it carries a slightly different meaning — referring to privileged operations or functionalities that require proper authorization. With the GET method, requests are used only to read data, not to modify it. Thus, it does not align with the definition of a “function” as described in BFLA.

“Actions” in this context typically involve HTTP methods other than GET, such as POST, PUT, or DELETE, since these methods are used to modify data rather than just read it.

Similarly, in BFLA, a “Function” often represents an operation that changes system state or performs a sensitive task — not just a simple data retrieval.

However, it’s important to note that GET requests can still be part of a BFLA vulnerability — for example, if a user without admin privileges is able to access sensitive admin-only information via a GET request. Even though the request doesn’t change data, the ability to retrieve unauthorized information still represents a failure in function-level authorization.

Here are two common methods for testing BFLA vulnerabilities:

Try different HTTP methods (e.g., changing GET to POST, or GET to DELETE)
Manipulate parameters within the request (e.g., DELETE /api/users/999 – An unauthorized user attempts to perform a delete operation on user 999.)


