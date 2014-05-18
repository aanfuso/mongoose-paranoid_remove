Mongoose paranoid_remove Plugin
===============================

A simple [Mongoose](https://github.com/LearnBoost/mongoose) plugin which adds
`deletedAt` date attribute to models that include our plugin.

## Installation

`npm install mongoose-paranoid_remove --save`

## Usage

Then require `mongoose-paranoid_remove` plugin on your schema file.

```javascript
var removedTimestamp = require('mongoose-paranoid_remove');

var UserSchema = new Schema({
    name: String
});

UserSchema.plugin(removedTimestamp);

module.exports = mongoose.model('User', UserSchema);
```

## Useful methods provided by paranoid_remove:

`user.paranoid_remove();`
Updates user.deletedAt, use it instead of calling the usual remove middleware.

``` Javascript
	// users DESTROY action
	.delete(function(req, res) {

		User.findById(req.params.user_id, function(err, user) {
			if (err) res.send(err);

			user.paranoid_remove();
			user.save(function(err) {
				if (err) res.send(err);

				res.json({ message: 'User deleted!' });
			});
		});

	});
```

`User.undeleted(err, users);`
Retrieves documents that have not been "removed".

``` Javascript
  // users INDEX action
  .get(function(req, res) {

    User.undeleted(function(err, users) {
      if (err) res.send(err);

      res.json(creatures);
    });

  })
```
