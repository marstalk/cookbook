# chain of responsibility

## Elasticsearch Filter
HTTP Request
-> convert to internal request object
-> fitler: authentication
-> filter: validation
-> filter: logging
...
-> interceptor: modify request/response (middleware in web framework)
...
-> Rest/Transport Action: handle business log
-> Routing: if needed.

Transport/RestAction
1. singleton
2. contains a bunch of FilterAction.
3. for every request, a chain is created with these filterActions. 

RequestFilterChain
1. prototype, a request has it's chain
2. the chain contain the filters of it's Action.
3. use AtomicInteger to iterate over the filsterAction.

```java
public interface ActionFilter{
    Response handle(Request request, ActionFilterChain);
}
public HTTPRequestChain{
    pirvate List<ActionFilter> filters;
    private AtomicInteger index = new AtomicInteger();

    void proceed(Request request){
        if(index < filters.size()){
            filters.get(index).handle(request, this);
            index.getAndIncrease();
        }
    }
}

public class Demo{
    main(){
        new Action
    }
}
```

## Servlet Filters(in-order traverse)

```java
@WebFilter("/*")
public class MyFilter implement Filter{
    @Override
    public void init(FilterConfig config){}
    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain){
        // before
        chain.doFilter(req, resp);
        // after
    }
    @Override
    public void destroy(){}
}

//
public SomeChain implement FilterChain{
    List<Filter> filterList;
    private AutomicInteger index = new AutomicInteger();

    public void doFilter(ServletRequest req, ServletResponse resp){
        if(index < filterList.size()){
            // TODO make sure this filter can be applied according to the path
            // leverage PathTire do do this.
            filterList.get(index).doFilter(req, resp, this);
        }
        index.getAndIncrease();
    }
}

```
## Spring inteceptor

```java
public class MyInterceptor implement HandlerInteceptor{

}
```

## ES Pipline
- DefaultValueFilter
- MappingFilter
- IgnoreFilter


## QA
