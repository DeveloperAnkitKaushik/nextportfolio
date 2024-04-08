import { Rule } from "sanity";

export const projects = {
    name: "projects",
    title: "projects",
    type: "document",

    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule: Rule) => Rule.required().error("Required"),
        },
        {
            name: "shorttitle",
            title: "Short Title",
            type: "string",
            validation: (Rule: Rule) => Rule.required().error("Required"),
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule: Rule) => Rule.required().error("Required"),
        },
        {
            name: "link",
            title: "Project Link",
            type: "string",
            validation: (Rule: Rule) => Rule.required().error("Required"),
        },
        {
            name: "code",
            title: "Code link",
            type: "string",
            validation: (Rule: Rule) => Rule.required().error("Required"),
        },
    ],
};