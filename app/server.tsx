'use server';
export const test1 = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return ({ data: 'test1' });
}

export const test2 = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return ({ data: 'test2' });
}

export const test3 = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return ({ data: 'test3' });
}