'use client';
import React from "react";
import { useRouter } from "next/navigation";

export default function Dashboard({}) {
	const router = useRouter();
	
	const handleLogout = async () => {
		await fetch('/api/logout', {method: 'GET'});
		router.push('/');
	};

	return (
		<div className="page-container dashboard-page">
			<section>
				<h2>Dashboard</h2>

				<button
					className="form_secondary_btn"
					onClick={handleLogout}
				>
					Log out
				</button>
			</section>
			
		</div>
	)
}