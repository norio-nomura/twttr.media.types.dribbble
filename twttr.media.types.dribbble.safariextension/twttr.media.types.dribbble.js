/*

The MIT License

Copyright (c) 2010 Norio Nomura

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

if (window.top === window) {
    
    (function(){var link = document.createElement('link');
    link.rel = 'stylesheet';
    if (typeof(safari) != 'undefined') {
        link.href = safari.extension.baseURI + 'twttr.media.types.dribbble.css';
    } else if (typeof(chrome) != 'undefined') {
        link.href = chrome.extension.getURL('twttr.media.types.dribbble.css');
    }
    link.type = 'text/css';
    link.media = 'screen';
    document.head.insertBefore(link, document.head.firstChild);
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = "{\n\
    var dispatchTimeoutEvent = function() {\n\
    	var evt = document.createEvent(\"CustomEvent\");\n\
    	evt.initCustomEvent(\"twttr.media.types.comGitHubNorioNomura\",false,true);\n\
    	document.dispatchEvent(evt);\n\
    };\n\
    var dribbbleListener = function(evt){\n\
    	if (typeof(twttr.mediaType) != \"undefined\"){\n\
    		twttr.mediaType(\"twttr.media.types.dribbble\").matchers([/\\b(?:http\\:\\/\\/)?drbl.in\\/\\/(\\d+)$/g,/\\b(?:http\\:\\/\\/)?dribbble.com\\/shots\\/(\\d+)\\S*$/g]).icon(\"photo\").favicon(\"http://dribbble.com/favicon.ico\").url(\"http://dribbble.com\").process(function(B,A){\n\
    		        var C=this;\n\
                    $.ajax({\n\
                        url:\"http://api.dribbble.com/shots/\"+B,\n\
                        dataType:\"jsonp\",\n\
                        success:function(D){\n\
                            C.data.id=D.id;\n\
                            C.data.title=D.title;\n\
                            C.data.url=D.url;\n\
                            C.data.image_teaser_url=D.image_teaser_url;\n\
                            C.data.width=D.width;\n\
                            C.data.height=D.height;\n\
                            C.data.pixels=(D.width*D.height).toLocaleString();\n\
                            C.data.created_at=D.created_at;\n\
                            C.data.likes_count=D.likes_count;\n\
                            C.data.comments_count=D.comments_count;\n\
                            C.data.views_count=D.views_count;\n\
                            C.data.player_url=D.player.url;\n\
                            C.data.player_username=D.player.username;\n\
                            C.data.player_avatar_url=D.player.avatar_url;\n\
                            C.data.player_name=D.player.name;\n\
                            A()\n\
                        }\n\
                    })\n\
        		}).methods({\n\
        		    html:function(A){\n\
        		        var B='<ol class=\"dribbbles\"><li id=\"screenshot-{id}\" class=\"group\"><div class=\"dribbble\"><div class=\"dribbble-shot\"><div class=\"dribbble-img\"><a href=\"{url}\" class=\"dribbble-link\" target=\"_blank\"><img alt=\"{teaser_base_name}\" src=\"{image_teaser_url}\" /></a><a href=\"{url}\" class=\"dribbble-over\" target=\"_blank\" ><strong>{title}</strong><span class=\"dim\">{width} &#215; {height} ({pixels} pixels)</span><em>{created_at}</em></a></div><ul class=\"tools group\"><li class=\"fav\"><a href=\"{url}/fans\" title=\"See fans of this screenshot\" target=\"_blank\">{likes_count}</a></li><li class=\"cmnt\"><a href=\"{url}#comments\" title=\"View comments on this screenshot\" target=\"_blank\">{comments_count}</a></li><li class=\"views\">\\n{views_count}\\n</li></ul></div></div><h2><a href=\"{player_url}\" class=\"url\" rel=\"contact\" target=\"_blank\"><img alt=\"{player_username}\" class=\"photo fn\" src=\"{player_avatar_url}\" />{player_name}</a></h2></li></ol>';\n\
        		        A(twttr.supplant(B,this.data))\n\
        		    }\n\
        		});\n\
    		document.removeEventListener(\"twttr.media.types.comGitHubNorioNomura\", dribbbleListener, true);\n\
    		delete dispatchTimeoutEvent;\n\
    		delete dribbbleListener;\n\
    	} else {setTimeout(dispatchTimeoutEvent,500);}\n\
    };\n\
    document.addEventListener(\"twttr.media.types.comGitHubNorioNomura\", dribbbleListener, true);\n\
    setTimeout(dispatchTimeoutEvent,500);\n\
    }";
    document.head.appendChild(script);})();

}
