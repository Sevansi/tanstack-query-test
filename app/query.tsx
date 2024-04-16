'use client'
import { useQuery, useMutation, useQueryClient, MutateFunction, MutationFunction, keepPreviousData } from "@tanstack/react-query";
import { test1, test2, test3 } from "./server";

export const queryGetTest1 = (id) => {
	return useQuery({
		queryKey: [`getCategoriesById-${id}`],
		queryFn: async () => await test1(),
		refetchOnWindowFocus: false,
		placeholderData: keepPreviousData,
	});
}

export const queryGetTest2 = () => {
	return useQuery({
		queryKey: [`getAllCategories`],
		queryFn: async () => await test2(),
		refetchOnWindowFocus: false,
		placeholderData: keepPreviousData,
	});
}

export const queryGetTest3 = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async () => await test3(),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['getAllCategories'] });
			queryClient.invalidateQueries({ queryKey: [`getCategoriesById-${21}`] });
		},
	});
}