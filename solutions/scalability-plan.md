# Scalability Plan for Image Processing
## Challenge
Handling 10M+ images per day.

## Solution

The solution needs not only to be scalable but cost effective to run and failure tolerent.

Would suggest some form of object/file storage solution such as blob or s3 as these are designed for this kind of work and are designed to be scalable and cost effective using availabiliyt and performance optimisations.

The images should then be processed to a suffiently small size to be used in a web application and maybe even mimetype converted for better performance. The images may also want to have their name changed to a more url friendly format or for security reasons if the bucket or blob account is publicly reachable but not indexable as fit for purpose

The serving of these files should then be run through a CDN to ensure fast delivery and scalability and to offload pulling of images that do not change often.

The CDN should be configured to cache the files for a period of time to ensure fast delivery and to reduce the load on the origin server.

The origin server should be configured to handle the incoming requests and to serve the files to the CDN.

Cache clear headers should be set to ensure the CDN is aware of the files and to ensure they are not served stale files.

As you ar a AWS house, the use of lambda is a no brainer, but it should be used for the processing of the images and not the serving of the files. this can be done with an s3 event trigger.

S3 would host the images.

Cloudfront would be used as the CDN or cloudflare could also be used (i like cloudflare, its very nice).

To ensure decent performance over mobile networks... consider the following:

CloudFront Edge Locations for faster delivery due to closer proximity to the user and lower latency.
Image Resizing and Compression for smaller images as above.
Progressive Image Loading with WebP formats to display images gradually

