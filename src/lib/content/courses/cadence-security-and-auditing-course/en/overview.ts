import type { CourseOverview } from '$lib/types/content/course.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import { generateSlug } from '$lib/utilities/dataTransformation/generateSlug';

export const overview: CourseOverview = {
	title: 'Cadence Security and Auditing',
	contentType: ContentTypeEnum.Course,
	slug: generateSlug(import.meta.url),
	excerpt:
		"This is a course created by Emerald Academy. It is meant to teach you all about smart contract security / auditing... what those are, why they're important, and how to best implement them. While we cover general topics that can be applied across any blockchain, this course is done entirely in the context of the Flow blockchain, and more specifically, the Cadence Smart Contract language.",
	metadata: {
		expertise: ExpertiseEnum.advanced,
		duration: '4 weeks',
		prerequisites: [],
		subjects: [SubjectsEnum.Cadence],
		faqs: [
			{
				question: 'What is this course?',
				answer:
					'This is a course created by Emerald Academy. It is meant to teach you Cadence. During the bootcamp, you will learn ALL of the major aspects of the language.<br/><br/>In addition to writing & deploying your own NFT Contract during the course, you will have the knowledge to write your own contracts too.'
			},
			{
				question: 'What will I know by the end?',
				answer:
					'<ul><li>All of the major concepts of Cadence</li><li>The ability to write your own smart contracts in Cadence</li><li>The ability to create most (non-advanced) Cadence contracts</li><li>You will have created an NFT Contract during the bootcamp</li><li>How to deploy a contract to Flow Testnet</li></ul>'
			},
			{
				question: 'What will I create?',
				answer:
					'You will create your own NFT smart contract deployed to Flow Testnet. You can see an example of that <a href="https://flow-view-source.com/testnet/account/0xfa88aefbb588049d/contract/YoungJacob" target="_blank">here</a>.<br/><br/>However, the foundational skills you learn will allow you to make much more than that.'
			},
			{
				question: 'Who is this course meant for?',
				answer:
					"<ul><li>If you've never coded Cadence before</li><li>If you have coded in Cadence but want to refresh up on some of the concepts</li><li>If you're interested in the language and want to know more</li></ul>"
			},
			{
				question: 'How does it work?',
				answer:
					"The lessons will be split into 'chapters,' and chapters will be split into 'days.' I did it this way so you can manage your time and progress through the course as you like. Do not feel pressured to do this every day. Do it at your own pace and have fun with it! It will always be here :)<br/><br/>Here's an overview:<ul><li>Lessons split into days</li><li>Written & video content associated with each day. The videos will be from my <a href='https://www.youtube.com/channel/UCf6DzMRwj7SJ3nPrZqd5hHw' target='_blank'>YouTube Channel</a>.</li><li>Quests to complete</li><li>Short quizzes</li><li>A completion certificate (<a href='https://floats.city/jacob.find/event/241503135' target='_blank'>this FLOAT</a>) if you have completed all the quests from Chapters 1-5 (Chapter 6 is extra credit). This will be proof that you have significant Cadence knowledge, and you will be able to show it to whoever you like as proof of expertise. Or just for fun! :D</li></ul>"
			},
			{
				question: 'What do I need ahead of time?',
				answer:
					'Nothing.<br/><br/>In order to complete this course, you need to know absolutely nothing about coding. I included Chapter 1.5 that teaches you the basics of computer programming.<br/><br/><i>Although Chapter 1.5 is a great introduction to programming, if you have never written code before, you may also want to do some outside learning before this course, because it can get complicated very quick. I would suggest some intro to Javascript tutorials to teach you some foundational elements of programming.<br/><br/>It is impossible to learn how to code by watching tutorials/reading articles. You must mess up on your own to make true progress.</i>'
			},
			{
				question: 'What are quests?',
				answer:
					"Quests are like homework assignments. There are quests for every day of content. They will test your understanding of the concepts that are in that day's content."
			},
			{
				question: 'How do I submit quests?',
				answer:
					'When you finish a quest, please store all your quests together. Then, when you want them to be reviewed, submit them in the #quest-submissions channel inside the <a href="https://discord.com/invite/wjA875sMjV" target="_blank">Emerald Academy Discord</a> and our instructors will review them.'
			},
			{
				question: 'What are quizzes?',
				answer:
					"Every day also has a quiz associated with it to test your knowledge. It is a simple Google Form you can fill out to test your understanding for that day's content.<br/><br/><i>All of these quizzes are entirely thanks to FrankenSense. Thank you for being an absolute legend!</i>"
			},
			{
				question: 'Multiple languages?',
				answer:
					'This course is currently available in English (README.md), Chinese (README_ZH.md), Spanish (README_ES.md), and Russian (README_RU.md). Under each day of content, you will see a matching README file for your language of choice.'
			}
		]
	}
};
