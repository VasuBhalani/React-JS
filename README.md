# **Vite vs Create React App (CRA)**

A brief comparison between Vite and Create React App (CRA) focusing on key differences in their configurations.

---

## **1. Vite**

- In **Vite**, the `index.html` file explicitly includes a `<script>` tag pointing to the `main.jsx` file.  
  This makes it straightforward to identify the entry point of the application.

  ### **Example**:
  ```html
  <script type="module" src="/src/main.jsx"></script>
  ```

  ![image](https://github.com/user-attachments/assets/b5271da3-3c8f-491b-9385-1d1db3da2f09)

## **2. Create React App**

- In Create React App, the react-scripts dependency is injected automatically.
  You won't see the direct configuration in the project, as it abstracts Webpack, Babel, and other setups.

  ### **Example**:
  
   ![image](https://github.com/user-attachments/assets/ec95cbdf-7a99-4f6e-af49-7b42b024b65d)
  
