import axios from "axios";
import { createClient } from "contentful";
import useSWR from "swr";

const query = `
{
    projectCollection{
      items {
        slug
        title
        description
        url
        gitHub
        tech
        thumbnail {
          title
          description
          url
        }
      }
    }
  }
`;

const getProjectData = () => {
	const address = `https://graphql.contentful.com/content/v1/spaces/2dqvp2akg9y8/`;

	return fetch(address, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + "cX3ICsEeWxQcUMY_A6bfZHMCEW5hrcvXU0-oIX3PRP8",
		},
		body: JSON.stringify({ query }),
	})
		.then((response) => response.json())
		.then((res) => {
			return res.data;
		});
};

const getSiteData = () => {
	const address = `https://graphql.contentful.com/content/v1/spaces/2dqvp2akg9y8/`;
	const query = `
	{
		sitedataCollection{
		  items{
			title
			description
			resume
			profile {
				title
				description
				url
			}
		  }
		}
	  }
	`;
	return fetch(address, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + "cX3ICsEeWxQcUMY_A6bfZHMCEW5hrcvXU0-oIX3PRP8",
		},
		body: JSON.stringify({ query }),
	})
		.then((response) => response.json())
		.then((res) => {
			return res.data;
		});
};
const ApiService = { getProjectData, getSiteData };

export default ApiService;
