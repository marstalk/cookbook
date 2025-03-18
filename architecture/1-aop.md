# what is AOP
Aspect oriented programming (AOP) is a programming paradigm that aims to increase modularity and reusability of code by allowing **the separation of cross-cutting concerns**（横切关注点）. It is used to modify the behavior of existing code without modifying the code itselft.

Let's take java for example, when we want to enhence logging ability to addUser method of UserService, we can use AOP to achieve this by hardcoding.
```java
public class UserService {
    public void addUser(User user) {
        // business logic here
    }
}

// sample to use AOP to add logging
public class LoggingAspect {
    public void beforeAddUser(User user) {
        System.out.println("Adding user: " + user.getName());
    }

    public void afterAddUser(User user) {
        System.out.println("User added: " + user.getName());
    }
}

// using AOP to add logging
public class UserServiceProxy {
    private UserService userService;
    private LoggingAspect loggingAspect;

    public UserServiceProxy(UserService userService, LoggingAspect loggingAspect) {
        this.userService = userService;
        this.loggingAspect = loggingAspect;
    }

    public void addUser(User user) {
        loggingAspect.beforeAddUser(user);
        userService.addUser(user);
        loggingAspect.afterAddUser(user);
    }
}

// sample usage
UserService userService = new UserService();
UserServiceProxy userServiceProxy = new UserServiceProxy(userService, new LoggingAspect());
userServiceProxy.addUser(new User("John"));
```

# implementation in Java.

## enhance at compiling: AspectJ

## enhance at loading class: cglib

## enhance at runtime: JDK dynamic proxy

# implement in Python

# implement in Rust

# use AOP in Spring
