import { Link } from "react-router-dom";
import { useCategories } from "../hooks/use-category";
import { cn } from "cn";
import { Utensils } from "lucide-react";

export function CategoryNav() {

const { data: categories = []} = useCategories()

    return (
        <nav className = "w-full">
        <ul className="overflow-hidden rounded-xl border border-border/70 bg-transparent">
        {categories.map((category) => (<li key={category.id} className = "relative">
            <Link to={`/products?categoryId=${category.id}`}
            className={cn('relative flex w-flull gap-3 items-center px-5 py-5 font-menu text-lg font-semibold uppercase tracking-tight border-xl border-transparent transition-colors duration-200 hover:z-10 hover:text-[#B86A2C]')}>
            {category.icon ? (
                <span>{category.icon}</span>
            ) : (
                <Utensils className="size-10 text-brand" />
            )}
            <span className="leading-thin">{category.name}</span>
            </Link>
            {category.name}</li>))}
        </ul>
        </nav>
    )
}