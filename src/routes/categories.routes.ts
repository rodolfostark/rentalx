import { Router } from "express";

import createCategoryController from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();
    return response.status(200).json(all);
});

export default categoriesRoutes;
