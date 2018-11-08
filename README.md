BucketLi.st

![Chair Force One Logo](https://cdn.shopify.com/s/files/1/2237/2693/products/Air_force-5_1024x1024@2x.png?v=1524594398)

## Description

Bucket List is designed to help users keep track of everything they plan on doing (eventually). This is an app that allows you to check off items that you’ve accomplished. A new feature is the “City” Function. This function allows you to plan trips and keep locations listed. You can also keep your bucket list organized by priority of what you want to do first. The app is currently free to download with no additional fees.

Repository Front-End:

https://github.com/Chair-Force-One/bucketlist-client

Link to Front-End:

https://chair-force-one.github.io/bucketlist-client/

Repository Back-End:

https://github.com/Chair-Force-One/bucketlist-api

Link to Back-End:

https://limitless-inlet-83543.herokuapp.com/

## Instructions

1. User should sign-up if not having an account yet.
2. User should sign-in if they are already signed-up to use the app.
3. The app allows a signed-in user to create adventures which act as resources to the bucket list.
4. A User will only have one Bucket List.
5. In order to add an adventure click the "Add item" button.
6. Once signed the list auto-populates with adventures.
7. After creating an adventure, the map shows the user which adventures they have (if Google's geocoder function in their API can correctly guess the targeted location).
8. A user can sign-out or change password for authentication purposes.
9. A user can edit, delete, or show an adventure which adjusts accordingly on the front and back end.

## WireFrames

[WireFrame-1](./public/IMG_2381.JPG)

[WireFrame-2](./public/IMG_2382.JPG)

[WireFrame-3](./public/IMG_2383.JPG)

## ERD

[ERD](./public/IMG_6002.JPG)

## User Stories

Authentication:

As a user, I want to be able to sign in to view data from previous sessions
As a user, i want to be able to create an account
As a user, I want to be able to change my password
As a user, I want to be able to sign out

Bucket List:

I want to store a list of things to do
I want to attach a location to each list item
I want to be able to check items of the list
I want to be able to edit or delete items from the list (Different than checking them off)
I want to be able to sort items by location or by status
I want to be able to view locations on a map (NOT MVP!!!)

## Structure

Authentication:

| Request | Routes | Schema |
|:-------:|:-------:|:------:|
|  POST | /sign-up  | Requires=> email: String, password: String, password_confirmation: String |
|  POST |  /sign-in | Requires=> email: String, password: String |
|  PATCH |  /change-password | Requires=> old_password: String, new_password: String, token: String |
|  DELETE |  /sign-out | Requires=> token: String |

Adventures:

| Request | Routes | Schema |
|:-------:|:-------:|:------:|
|  GET | /adventures  | Requires=> token: String |
|  GET |  /adventures/:id | Requires=> token: String |
|  POST |  /adventures | Requires=> priority: Number, title: String, place: String, notes: String, token: String |
|  PATCH |  /adventures/:id | Requires=> priority: Number, title: String, place: String, notes: String, token: String |
|  DELETE | /adventures/:id | Requires=> token: String |

## Technologies Used

- HTML

- CSS

- Mongo

- Mongoose

- JScript (edited)


## Planning

As Team Chair Force We:

 - Created a team culture code.
 - Reviewed Group Guidelines, Working in Groups, and Group Roles and abided by them.
 - Created team scrum plan.
 - Reviewed scrum daily.
 - Created team git workflow and solved any merging conflicts together.
 - Created User Stories.
 - Created Wire Frames.
 - Created ERD.

Here is our initial plan:

API:
 - Download Express API Template
 - Create a Github Repository
 - Deploy to Heroku
 - Create your resource and end points
 - Test your resource's end points with curl scripts
 - Add the relationship to a User
 - Add User ownership to resource controller

Client:
 - Download Browser Template
 - Create a Github Repository
 - Deploy to Github Pages
 - Review api-token-auth
 - Sign Up (curl then web app)
 - Sign In (curl then web app)
 - Change Password (curl then web app)
 - Sign Out (curl then web page)
 - All API calls have success or failure messages
 - Review query-ajax-post
 - Create resource (curl then web app)
 - Get all of their owned resources (curl then web app)
 - Delete single resource (curl then web app)
 - Update single resource (curl then web app)

 Final Touches:
 - README
 - Troubleshoot/Debug
 - Style

## Unsolved Issues

- Clean up user interface.
- Integrate social aspect.
- Organize list based on completedness.

## Additional Resources

[Google Maps API Documentation](https://cloud.google.com/maps-platform/)
[Bootstrap Documentation](https://getbootstrap.com/)

## Google API Terms of Service

https://cloud.google.com/maps-platform/terms/
- All licensing and acceptable use can be found in the above link.
