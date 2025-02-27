import type { TaskDataCustom } from "../Types";

const taskData: TaskDataCustom = {
	datasets: [
		{
			description: "Bing queries with relevant passages from various web sources.",
			id:          "ms_marco",
		},
		
	],
	demo: {
		inputs: [

			
			{
				label:   "Source sentence",
				content: "Machine learning is so easy.",
				type:    "text",
			},
			{
				label:   "Sentences to compare to",
				content: "Deep learning is so straightforward.",
				type:    "text",
			},
			{
				label:   "",
				content: "This is so difficult, like rocket science.",
				type:    "text",
			},
			{
				label:   "",
				content: "I can't believe how much I struggled with this.",
				type:    "text",
			},
			
		],
		outputs: [
			{
				type: "chart",
				data: [
					{
						label: "Deep learning is so straightforward.",
						score: 0.623,
					},
					{
						label: "This is so difficult, like rocket science.",
						score: 0.413,
					},
					{
						label: "I can't believe how much I struggled with this.",
						score: 0.256,
					},
				],
			},
		],
	},
	metrics: [
		{
			description: "Reciprocal Rank is a measure used to rank the relevancy of documents given a set of documents. Reciprocal Rank is the reciprocal of the rank of the document retrieved, meaning, if the rank is 3, the Reciprocal Rank is 0.33. If the rank is 1, the Reciprocal Rank is 1",
			id:          "Mean Reciprocal Rank",
		},
		{
			description: "The similarity of the embeddings is evaluated mainly on cosine similarity. It is calculated as the cosine of the angle between two vectors. It is particularly useful when your texts are not the same length",
			id:          "Cosine Similarity",
		},
	],
	models: [
		{
			description: "This model works well for sentences and paragraphs and can be used for clustering/grouping and semantic searches.",
			id:          "sentence-transformers/all-mpnet-base-v2",
		},
		{
			description: "A multilingual model trained for FAQ retrieval.",
			id:          "clips/mfaq",
		},
	],
	summary:      "Sentence Similarity is the task of determining how similar two texts are. Sentence similarity models convert input texts into vectors (embeddings) that capture semantic information and calculate how close (similar) they are between them. This task is particularly useful for information retrieval and clustering/grouping.",
	widgetModels: ["sentence-transformers/all-MiniLM-L6-v2"],
	youtubeId:    "VCZq5AkbNEU",
};

export default taskData;
