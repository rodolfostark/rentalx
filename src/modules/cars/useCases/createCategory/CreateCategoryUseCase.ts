import ICategoriesRepository from "../../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    private categoriesRepository: ICategoriesRepository;
    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists");
        }
        this.categoriesRepository.create({ name, description });
    }
}

export default CreateCategoryUseCase;
