const express = require("express");
const issueRouter = express.Router();
const Issue = require("../models/issue.js");
const expressJwt = require("express-jwt");

//get all    works
issueRouter.get("/", (req, res, next) => {
	Issue.find((err, issues) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(200).send(issues);
	});
});

// get by user id  works
issueRouter.get("/user", (req, res, next) => [
	Issue.find({ user: req.user._id }, (err, issues) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(200).send(issues);
	}),
]);

// add new issue    works
issueRouter.post("/", (req, res, next) => {
	req.body.user = req.user._id;
	const newIssue = new Issue(req.body);
	newIssue.save((err, savedIssue) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(201).send(savedIssue);
	});
});

// delete issue		works
issueRouter.delete("/:issueId", (req, res, next) => {
	Issue.findOneAndDelete(
		{ _id: req.params.issueId, user: req.user._id },
		(err, deletedIssue) => {
			if (err) {
				res.status(500);
				return next(err);
			}
			return res
				.status(200)
				.send(`Successfully deleted Issue ${deletedIssue.title}`);
		}
	);
});

// update issue in postman
issueRouter.put("/:issueId", (req, res, next) => {
	Issue.findOneAndUpdate(
		{ _id: req.params.issueId, user: req.user._id },
		req.body,
		{ new: true },
		(err, updatedIssue) => {
			if (err) {
				res.status(500);
				return next(err);
			}
			return res.status(201).send(updatedIssue);
		}
	);
});

// i think worked in postman
issueRouter.put("/upVote/:issueId", (req, res, next) => {
	Issue.findOneAndUpdate(
		{ _id: req.params.issueId },
		{ $inc: { upVote: 1 } },
		{ new: true },
		(err, updatedIssue) => {
			if (err) {
				res.status(500);
				return next(err);
			}

			// if (updatedIssue.upVote.includes( req.user._id)) {
            //     Issue.findOneAndUpdate(
            //         { _id: req.params.issueId },
            //         { $inc: { likes: -1 } },
            //         { new: true },
            //         (err, updatedIssue) => {
            //             if (err) {
            //                 res.status(500);
            //                 return next(err);
            //             }
            //             return next(new Error("You already liked this issue"))
            //         }
            //     );

			// 	;
			// }


            //add the req.user._id to upVoters array property of your issue
			return res.status(201).send(updatedIssue);
		}
	);
});

// i think worked in postman
issueRouter.put("/downVote/:issueId", (req, res, next) => {
	Issue.findOneAndUpdate(
		{ _id: req.params.issueId },
		{ $inc: { downVote: 1 } },
		{ new: true },
		(err, updatedIssue) => {
			if (err) {
				res.status(500);
				return next(err);
			}
			return res.status(201).send(updatedIssue);
		}
	);
});

module.exports = issueRouter;
