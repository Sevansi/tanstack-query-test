'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { queryGetTest1, queryGetTest2, queryGetTest3 } from "./query";

export default function Home() {
	const { data: data2 } = queryGetTest2();

	const [isOpen, setIsOpen] = useState(false);

	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();

	const closeModal = () => {
		const params = new URLSearchParams(searchParams);
		params.delete('test');
		replace(`${pathname}?${params}`, {
			scroll: false,
		});
		setIsOpen(false);
	}

	return (
		<main className="flex min-h-screen flex-col items-center p-24">

			<button onClick={() => {
				const params = new URLSearchParams(searchParams);
				params.set('test', '21');
				replace(`${pathname}?${params}`, {
					scroll: false,
				});
				setIsOpen(!isOpen);
			}}>Open modal</button>
			{isOpen &&
				<Block closeModal={closeModal} />
			}
		</main>
	);
}

const Block = ({ closeModal }) => {
	const { data: data1, isLoading } = queryGetTest1(21);

	const { mutateAsync } = queryGetTest3();

	return (
		<div className="bg-red-500 w-1/2 h-1/2 flex flex-col gap-4">
			Hi {data1?.data}
			{isLoading && <div>Loading...</div>}
			<button onClick={async () => {
				await mutateAsync();
				closeModal();
			}}>Click me</button>
		</div>
	);
}
