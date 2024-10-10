import Link from "next/Link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className="w-full fixed top-0 left-0 py-8 border-stone border-2 bg-pine z-10"> 
			<div className="max-w-[1500px] mx-auto px-6">
				<div className="flex justify-between items-center">
					<Link href="/">
						<Image src="/logo.png" alt="logo" width={110} height={38} />	
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;
