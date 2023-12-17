# Rasa-in-Backend

## Getting Started

To get started running the project locally, please follow the steps below.

First, clone the repository.

```bash
git clone https://github.com/C523-PS056/Rasa-in-Backend.git
```

Then, install dependencies and fetch data to your local machine. **Note that we use NPM**

```bash
cd Rasa-in-Backend
npm install
```

Finally, run the development.

```bash
npm run dev
```

---

## How To Use It

**Base Url** :  `https://rasa-in-backend-foilb6bbw-cakra17.vercel.app/`

| Endpoint | Usage | Example | Method |
|----------|-------|---------|----------|
| `/api/articles` | Add Article | - |  POST  |
| `/api/articles` | Get Article | - |  GET   |
| `/api/articles?user=` | Get Article with user query | `api/articles/?user=dodi` |  GET   |
| `/api/articles?cat=` | Get Article with category query | `api/articles/?cat=Fermentasi` |  GET   |
| `/api/articles/:id` | Get Article by Id | `/api/articles/65616bd5f02afdb3f4f95a01` |   GET  |
| `/api/articles/:id` | Update Article | `/api/articles/65616bd5f02afdb3f4f95a01` |  PUT  |
| `/api/articles/:id` | Delete Article | `/api/articles/65616bd5f02afdb3f4f95a01` |  DELETE  |
