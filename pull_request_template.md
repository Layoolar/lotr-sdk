1. **What language did you program in?**

   Typescript

2. **Have you manually tested the SDK?**

   Yes

3. **Did you add a test suite? If so, how will we use it? If not, why?**

   Yes. You can run the Jest tests by executing the command `npm run test`.

4. **Did you use any 3rd party library? Why did you use it? What are the tradeoffs?**

   Yes. I used `isomorphic-unfetch` because of the following reasons:
   - It is designed to work in both the browser and Node.js environments, making it suitable for isomorphic or universal JavaScript applications.
   - `isomorphic-unfetch` has a smaller footprint, which reduces the bundle size and has fewer dependencies. However, it has a smaller community and ecosystem and may have fewer extensive features.
   Cons:
   - Small community and support
   - Less extensive functionalities

5. **Do you feel this SDK makes it easier to interact with the API?**

   Yes, the SDK simplifies the interaction with the API.

6. **If you had more time, what else would you add?**

   If I had more time, I would add a search function and additional filtering and sorting methods applicable to the API.

7. **What would you change in your current SDK solution?**
   I would add a function in the base code that handles filtering and sorting for the list endpoints. Also more test scripts

8. **On a scale of 1 to 10 (10 being the highest), how would you rate this solution?**

   I would rate this solution 8.5/10.

9. **Anything else we should keep in mind when we evaluate the project?**

   Please note that I made the `baseUrl` parameter optional to allow flexibility in case the API moves. Users of older versions who are not willing to upgrade can pass the new URL.

