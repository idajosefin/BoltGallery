BoltGallery
====================

BoltGallery is a jQuery Lightbox Gallery. It's simple, minimalistic and perfect to showcase your photos in a beautiful way. 

Documentation
====================

Get started
----------------------------------
* 1. Load the Javascript and CSS
Download and unzip the latest version of BoltGallery. Include the stylesheet boltgallery.css in the head section of your HTML document. Add the JavaScript file boltgallery.js after loading jQuery.
```sh
<link rel="stylesheet" type="text/css" href="boltgallery.css"> 
<script src="boltgallery.js"></script>
```

* 2. Turn it on
Each image must be wrapped inside a container element. See the example below to showcase your photos like the demo. Add "img-title" if you want to show the image caption. 

```sh
<div class="boltgallery">
	<ul>
		<li>
			<div class="thumbnails">
				<img src="img/demo/demo-1.jpg" class="portrait" alt="" />
				<div class="image_title"><h5 class="title">Image title</h5></div> 
			</div>
		</li>
		<li>
			<div class="thumbnails">
				<img src="img/demo/demo-2.jpg" alt="" />
				<div class="image_title"><h5 class="title">Image title 2</h5></div> 
			</div> 
		</li>
	</ul>
</div><!-- /boltgallery -->
```
* The zip-file includes demo images to get you up and running in no time. 

**Demo**
* Check out the demo page here: http://www.student.bth.se/~ider14/javascript/boltgallery/

License
----------------------------------
Licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.