# Rasa-in-Backend

| Endpoint | Usage | Example | Method |
|----------|-------|---------|----------|
| `/api/articles` | Add Article | - |  POST  |
| `/api/articles` | Get Article | - |  GET   |
| `/api/articles?user=` | Get Article with user query | `api/articles/?user=dodi` |  GET   |
| `/api/articles?cat=` | Get Article with category query | `api/articles/?cat=sarapan` |  GET   |
| `/api/articles/:id` | Get Article by Id | `/api/articles/65616bd5f02afdb3f4f95a01` |   GET  |
| `/api/articles/:id` | Update Article | `/api/articles/65616bd5f02afdb3f4f95a01` |  PUT  |
| `/api/articles/:id` | Delete Article | `/api/articles/65616bd5f02afdb3f4f95a01` |  DELETE  |
| `/api/categories/` | Add Categories | - |  POST  |
| `/api/categories/` | Get Categories | - |  GET  |