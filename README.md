# Ren-Rui-Project
Git Workflow
============


A Git Workflow is a recipe or recommendation for how to use Git to accomplish work in a consistent and productive manner. Git workflows encourage users to leverage Git effectively and consistently. Git offers a lot of flexibility in how users manage changes. Given Git's focus on flexibility, there is no standardized process on how to interact with Git. When working with a team on a Git managed project, it’s important to make sure the team is all in agreement on how the flow of changes will be applied.  I will isolate software development process patterns found in common Git workflows. Knowledge of these will help you find a direction when joining, creating or growing a development team. 


*Collaboration*


In terms of Git process, collaboration is often about branching workflows. Thinking ahead on how you will intertwine commit trees will help you minimize integration bugs and support your release management strategy.

*Integration Branch*

Use an integration branch with software development teams who work towards deploying a collection of contributions into production as a single entity. This is opposed to teams that focus on deploying features individually. 

*Topic Branches*

Teams will want to use topic branches if it is important to keep their commit trees in a state that can be easily read or have individual features reverted. Topic branches signify that the commits may be overwritten (using a force push) to clean up their structure and be shrunk down to a feature commit.

*Fork*

Open source projects thrive using this Github-originated feature. The fork empowers the repository maintainers with an enforced gateway over pushing directly to an origin repository branch, but more importantly it facilitates collaboration.

*Clone*

Using a clone of the project’s repository lays out an isolated training and communication ground for the outsourced team to manage their contributions, enforce policies and take advantage of knowledge sharing - all out from under the watchful eye of the client’s development team. Once a contribution is deemed up to standard and ready for the main repository it can be pushed to one of the origin repositories remote branches and integrated as usual.
