import * as React from "react";
import { Header, AppShell as MantineAppShell, Title, MantineProvider, Navbar, NavLink } from "@mantine/core";
import { BrowserRouter, Outlet, Link, Routes, Route } from "react-router-dom";
// import * as styles from './index.css';

export type Route = {
	element: React.FunctionComponent;
	path: string;
}

export type ShellProps = {
	title: string;
	colorScheme?: "light" | "dark";
	routes: Route[];
	navLinks: NavLinkProp[]
}

export type NavLinkProp = {
	label: string;
	path: string;
}

function MainLink({ label, path }: NavLinkProp) {
	return (
		<Link to={path} className="link__remove-deco">
			<NavLink label={label} />
		</Link>
	)
}
export const AppShell: React.FunctionComponent<ShellProps> = (
	{
		title,
		colorScheme,
		routes,
		navLinks
	}
) => (
	<BrowserRouter>
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{
				colorScheme
			}}
		>
			<MantineAppShell
				header={
					<Header
						height={60}
						p="xs"
						sx={{
							display: "flex"
						}}
						styles={(theme) => (
							{
								main: {
									backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
								}
							}
						)}
					>
						<Title>{title}</Title>
					</Header>
				}
				navbar={
					<Navbar width={{ sm: 200, lg: 300 }}>
						{
							navLinks.map(link => (
								<MainLink {...link} key={link.path} />
							))
						}
					</Navbar>
				}
			>
				<Routes>
					{
						routes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								element={<route.element />}
							/>
						))
					}
				</Routes>
				<Outlet />
			</MantineAppShell>
		</MantineProvider>
	</BrowserRouter>

)
