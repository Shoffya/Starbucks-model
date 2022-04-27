<style>
/*Markdown (README)*/

/*Title h1 and h2*/
h1,h2 {
    display: flex;
    justify-content: center;
    align-items: center;
}

/*Image (Logo)*/
.imgLogo img{
    display: block;
    margin-left: auto;
    margin-right: auto
}

/* EVENTS */

#events {
    position: relative;
    padding-top: 64px;
}

img {
    max-width: 100%;
}

.container.events {
    padding: 10px 0;
    border-radius: 4px;
    background: black;
}

figure {
    max-width: 800px;
    margin: 0 auto 20px;
}

@media (max-width: 991px) {
    figure {
        max-width: 600px;
    }
}

@media (max-width: 762px) {
    figure {
        max-width: 400px;
    }
}

figure img {
    display: block;
    max-width: 100%;
    min-width: 100%;
}

.thumb_img_list {
    text-align: center;
    margin-bottom: 0;
}

.thumb_img_list ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.thumb_img_list ul li {
    display: inline-block;
    width: 100px;
    margin: 5px 20px;
    cursor: pointer;
}

.thumb_img_list ul li:hover {
    z-index: 2;
    transform: scale(1.25);
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.425);
}

.thumb_img_list ul li.active {
    z-index: 2;
    transform: scale(1.25);
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.425);
}

.thumb_img_list ul li img {
    display: block;
}
</style>

#Starbucks Model

<span class="imgLogo">![logo Starbucks](img/md/logo.png)</span>

<br>
##Information
---

This is a Starbucks template site, made solely for testing. The other pages and button functionality will be created soon.

**The page consists of:**

* HTML
* CSS
* Javascript.
<br>

##Site View
---

<div id="events">
    <div class="container" id="photos_winds">
        <div class="row">
            <div class="container events">
                <figure>
                    <img src="img/md/pg1.png" alt="Model Image" class="mainImg">
                </figure>
                <div class="thumb_img_list">
                    <ul class="thumb">
                        <li>
                            <img src="img/md/pg1.png" alt="Model Image" onclick="imgSlider('img/md/pg1.png');">
                        </li>
                        <li>
                            <img src="img/md/pg2.png" alt="Model Image" onclick="imgSlider('img/md/pg2.png');">
                        </li>
                        <li>
                            <img src="img/md/pg3.png" alt="Model Image" onclick="imgSlider('img/md/pg3.png');">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="js/events.js"></script>