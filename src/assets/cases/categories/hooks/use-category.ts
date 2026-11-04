import { useQuery } from "@tanstack/react-query";
import { CategoryService } from "../service/category.service";

export function useCategories() {
    return useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const result = await CategoryService.listAll()
            return result
        }
    });}