---
layout: post
title: Using animation to build better interfaces
---




**Plan the physical layout or the animations won't make sense**

If you use animation to navigate between screens, you need to layout your whole app in physical space or the animations won't make any sense.  Stop thinking of "information architecture" in abstract terms.  Try to think of your app as a physical structure instead of a series of screens.  If you find a structure that makes intuitive sense to you, use that as a starting point, then mock it up. 


**Use Prezi or Keynote to mock up your animations**

This one is fairly simple --  if you're not sure about an animation, try to animate a mockup.  You don't need to know Objective C or Cinema 4D to try out animations.  Prezi and keynote both have libraries to help you sketch things out.  If you want something you can actually click around on a phone, you can use CSS3 animations on a basic html page.  Use python SimpleHTTPServer[http://docs.python.org/2/library/simplehttpserver.html] to spin up a quick server and forward that port using Forward[http://forwardhq.com].  Objective C developers will cringe at this but if you're a font end guy or if you're planning to use web views this is fast and useful.


**Provide contextual cues to avoid building a maze**

About a decade ago, a researcher at Yale learned that we are able to use low-level visual cues like color and shape to quickly orient visual perception.  Marvin Chun would show his test subjects an image exactly like the one below, and they would have to press a key when they found the "T" hidden amongst the "L"s. If they decided there was no "T" they would press another key.  After they had made their decision, they were asked whether they had seen that particular display before.  

The remarkable part of this study was not that people were faster at finding the T if they had seen that particular slide before, but that they were unable to differentiate the slides they had seen from they ones they hadn't.  I'll say that again, because it's very strange: people are faster at finding the "T" in the slides they have seen before, even though they cannot guess better than chance whether they've seen it before or not.


CHUN, 2000: http://scholar.google.com/scholar?cluster=10321664990047792082&hl=en&as_sdt=0,5&as_vis=1

The human visual system has an uncanny ability to orient in physical space.  Provide enough differentiation and people will find their apps faster, navigate more effectively, and generally not get lost in your interface.  Early interface designers were aware of contextual cues.  Researchers at Microsoft modified IE4 to display bookmarks on a digital table, complete with coloured circles as contextual cues.  iOS7 does a similar thing by displaying a group of icons as tiny little icons you can zoom into, instead of showing an icon of a folder.

Data Mtn
http://scholar.google.com/scholar?cluster=10055610256684102579&hl=en&as_sdt=0,5


**Make it fast or don't make it**

If your animation takes more than three-quarters of a second to complete, you should think twice about  using it.  No animation is better than slow animation.


