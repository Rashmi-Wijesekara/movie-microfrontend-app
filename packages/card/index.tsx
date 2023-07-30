import React from "react";
import {
	Card, Image, Text, Button, Group, useMantineTheme
} from "@mantine/core";
import { useStore } from "store";

export const MovieCard: React.FunctionComponent<{
	title: string;
	image: string;
	showAddButton?: boolean
}> = (
	{
		title, image, showAddButton
	}
) => {
		const theme = useMantineTheme()
		const { addMovie } = useStore()

		return (
			<Card shadow="sm">
				<Card.Section>
					<Image src={image} height={300} alt={title} />
				</Card.Section>

				<Group position="apart">
					<Text weight={500} mt={10}>{title}</Text>
				</Group>

				{
					showAddButton && (
						<Button fullWidth variant="light" size="xs" mt={10}>
							Add to List
						</Button>
					)
				}
			</Card>
		)
	}