/* Dynamic Params Example:- previously we learned about generateStaticParams() function it lets us pre
 render static routes for dynamic segements by returning an array of objects where the keys match with our
 dynamic parameters. in previous example in generateStaticParams() we are returning values id 1, 2 and 3 in pre 
 render product pages at build time. if someone tries to access a product page with an id which is not there in 
 generateStaticParams()  like id values with 4, 5 and so on next.js still render that pages in advance means in runtime
 it will render. means if we navigate to http://localhost:3000/products/5 still it will display. to
 control this behaviour we have to use dynamicParams. by default dynamicParams is set to true.
 -> Dynamic params control what happens when a dynamic segment is visited that was not generated with generateStaticParams()
 -> true -  Next.js will statically render pages on demand for any dyanmic segment not included in generateStaticParams()
 -> false -  Next.js will return 404 error for any dynamic segments not included in our pre rendered list

 when to use true:-
 -> If you are building an ecommerce site, you will probably want to keep dynamic params set to true. this way you can 
 pre render your most popular product pages for better performance, but still allow access to all your other products.
 they will just be rerendered on demand.
 
 when to use false:- 
 -> If you are working with something like a blog where you have smaller, more fixed number of pages, you 
 can prerender all of them and set dynamic parameters to false.
 -> If someone try to access a blog post that does not exist they will get 404 error instead of waiting for a page
 that will never exist.



*/