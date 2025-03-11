- server downtime
- software failure
- **security breaches**(安全漏洞)
- user errors
- other unexpected accidents

- **redundant resources** **kick in** automatically when the system experience a fault.
- to address fault
- build fault tolerance into the infrastructure
- employ measures = take measures
- buggy software
- lost productivity, lost revenue and lost trust in the brand
- thoroughly tested against a variety of read-world scenarios.
- meet expectation

- HA high availability
- ultimate goal
- internet connection
- kick customer out of the system

- resilient system 弹性的系统
- to an increased demand of 
- pick up hardware and evaluate cost of the solution
- split data into several database called sharding, each shard store a subset of data.
- the service talks to the database need to know how many machines exists and which to pick to store and retrieve data
- a better solution is to introduce(引入) a light proxy server that knows about all the database machines and routes the traffic（流量）to the correct shard.
- eventual consistency
- nomalization(标准化) is good for relational database


- build a chart to describe data flow
- Deep dive(深入分析)
- There are a few details that I **glossed over** in the last paragraph. 
- examine the issue closely(深入调查问题)
- super late response
- read-heavy application VS write-heavy application
- it takes a toll on consistency(对一致性造成损害)
- as demonstrated in the figure below
- Figue 3 expose the fundamental tradeoffs between availability and consitency, as dictated(描述) by CAP theorem
- stale data(旧数据，没有同步更新的数据)


- **monotonic** increasing/decreasing(单调)
- **successive** read（连续读）
- to address this issue, we **introduce**(引入) a middle layer called proxy.
- failover occurs as a follower must be promoted to handle write request for a sake of availability
- leader failure will probably lead to **data loss** as followers do not have the **latest writes**(noun.)
- For the clients, it is as if their writes **vanish up in thin air**.
- To make things worse, consider what if the **older leader** **rejoined** the group.

---
- **Split-brain**, is a situation in which two nodes are leaders because of the **network outage**.
- There is not simple way to **avoid split-brain** automatically. 
- Like many **engineering designs**, picking the right replication strategy is all about trade-offs.
- **double-edged sword**(双刃剑)
- Sync replication **trade** time **for** durability, but it might not be a good idea for certain applications.
- Some people **decide in the middle** - having one sync replica and **a bunch of** async replicas.

---
- **long range** network communication(远距离网络通信)
- no two computer's clocks are **perfectly** synced.
- to use **consistent hashing** to **redistribute** the requests.
- **Topology**英 /tə'pɒlədʒɪ/(拓补学): **fully connected** v.s. **star** v.s. **ring** 
- **adopts a philosophy** that is contrary to the leader-based replication
- quorum(法定人数)
- **denote** the read number **as** r, the write number as w, and the total repilca as T
- this process works fine, but there is one **caveat**英 /'kævɪæt/(注意事项).
- **random read** v.s. **sequential read**

---
- non-intrusive(非侵入的)
- the database provide s a solution to **determine**(测定) the country,city,state,latitude.

- **case-sensitive** v.s. non case-sensitive
- most programmer have experienced that coming back to their work one or two years later and have to **re-figure out** what they did.
- multi-lines comment block that **spans over** multiple lines
- use comments to **leave out** part of the code
- in php, variables starts with **$ sign**, follow by the name of variables.
- after the execution of this line of code, the variable **hold** the value xxx

---  

- put quotes around the value like this: "ddd"
- **think of** variables **as** container for storing data.
- a variable name can be short like x,y, or a more descriptive name like age/carname/total_count
- a variable can only contains **alpha-numeric** characters and underscores.
- php is a loosly typed language
- **statically** type v.s. dynamically type: whether a variable can store different type of value.
- **strongly** type v.s. weakly type: whether demands specification of data types

---

- database **tier** v.s. server tier
- a boolean represents two possible stats: TRUE FALSE
- classes and objects and two **main aspects of** object-oriented programming
- a class is a **template** of objects, and object is a **instance** of the class.
- when individual objects created, they inherit all the properties and behaviors from the class, but objects will have different values for the properties.
- the automatic conversion can sometimes break your code. that's the disaventage of the dynamically type program language.

---

- + sum of, addition
- - difference of , substraction
- * product of , multiplication
- / quotient of , division
- % remainder of , modulus
- ** result of araising a to the b'th power

- ++a pre-increment v.s. increase
- a++ post-increment
- --a pre-decrement
- a-- post-decrement

---

- conditional assignment operator : ternary(三目运算符)
- **loops through** the block of the code once, and then repeat the loop as long as the specified condition is true.
- for(init **counter**; test counter; increment counter){}
- loops through the block of the code for each element in the array
- for every loop iteration
- the break statment can be used to **jump out of** the switch and loop.
- php array types: index array v.s. associate array v.s. multidimensional array

---

- accumulation of technical debt drives me up to the wall.
- a regular expression is a sequence of character forms a search pattern
- you need to validate the form data to protect your script from **malicios code** .
- proper validation of form data is important for protect your form from hackers and **spammers**.
- in php, "request" and "include" are identical, except upon failure.
- **procedural** programming v.s. **object-oriented** programmming.


- we have to try since **transient failure** exists, because of network failure or server overload.
- Traditionally, we have been getting such errors in database connections and service calls, But in the new cloud world, the chances of getting such errors has increased since our application itself might have some elements and components running in the cloud.
- momentary loss of network, prominent 
- well-regarded technology(充分认同的)
- ad-hoc（即席查询）TODO ❓

- load testing
- stress testing, to identify the **break point** in the system: which component will start to suffer first. and what resource it will be: memroy,CPU,network,diskIO
- soak testing, find leaks in resources, like memory leaks 
- Apache jmeter is a tool that can be used to generate the desired load. 
- Remember four golden signals of monitoring: latency, traffic, errors and **saturation**，

- procedual programming is about writing procedules and function to operation data, while opbject-oriented programming is about creating objects contains data and functions.
- oop provide clear structure fro programs.
- oop makes the code easier to maintain/modify/debug
- oop support Encapsulation/Polymorephism/Inheritance
- Dont' Repeat Yourself principle.

- in a class, variables are called properties, and functions called methods.
- abstract class and methods and when parent class has a named method, but need its child to fill out the tasks.
- less restricted access modifier
- php namespace, they allow for better organization by grouping class that work together to perform a task.
- connect and manipulate database

- **semester**(学期)
- to make less **vague**, we need to ask interviewers more questions.
- survice hardware/network failures
- And our usual recommendation is to be **proactive** and clarify requirements **upfront**.
- facade(面具、表面、外观)英 /fə'sɑ:d/

- fan-out manner, which means messages are sent to multiple destinations parallel

  
https://www.acodersjourney.com/system-design-interview-consistent-hashing/
- Consistent hashing is one of the techniques used to **bake in** scalability into the storage architecture of your system **from grounds up**.
- **alleviate**(减轻) bottlenecks
- we should be able to distribute the incoming queries **uniformly** among the set of n database servers.
- NoSQL databases enable rapid, ad-hoc organization and analysis of extremely high-volume, **disparate**(不同的) data types.

---
- there is two drawbacks with this approach
- to find out which database the incoming key resides on, we 
- we travel clockwise on the ring,
- non-uniform data distribution = hot spots
- elastically scale up or down base on the traffic load.
- we define a server class which basically encapsulate an ip address and represent a physical server.

- no single point of failure **SPOF**
- seperation of concerns, a design principle that teaches us that provide access to database through a well-define interface.
- it greatly smiplifies maintenance and ability to make change in the future.
- second, metadata service will act as a caching layer between database and other components, we don't want to hit database with every message published to the system.
- we need to store message for some period of time.

- resulting degraded performance or node failures.
- I thought that was the norm(常态)
- prepare interviews diligently(勤奋地)
- this app make short-range commute very easy by offering competitive pricing, reasonable short waiting time, and high availability.
- From technical point of view, system like this is very interesting because nearest-neighbor searching is hard.
- air gapped environment(网络隔离环境)
- service monitor system encounter a large amount of faults produced by APIs and on-call engineer needs to be notified.


- fallacy(谬论), 8 fallacies of distribution system
- I often see these 8 fallacies generally ignored or downplayed(不予重视) when discussing system design.
- Latency is omnipresent英 /ɒmnɪ'prez(ə)nt/(无处不在的). It occurs in all communication.


- we'll learn how to retry failed calls and make more resilient REST clients.
- **By instinct** what we can do is update our business code where we wrote the statement for api call inside a try catch and while loop and write code for another API call until our condition is met. That might serve our purpose but it will make our code **ugly** and **under-implemented**.
- Latency is omipresent, it occurs in all the time.
- It is not meant to be exhaustive(全面的，透彻的)


# senior software engineer interview questions

Here are some common senior software engineer interview questions and their answers:

What is your experience with software development methodologies?
This question aims to understand your experience with agile methodologies, such as Scrum or Kanban, as well as more traditional approaches like Waterfall. You should be able to discuss your experience with each methodology, what worked well, and what didn't. Emphasize your ability to adapt to different approaches based on the needs of the project.

Can you describe a complex technical problem you solved and how you went about solving it?
The interviewer is looking for your ability to work through complex issues, starting with understanding the problem, researching solutions, and eventually finding a resolution. Be sure to talk about how you broke down the problem into smaller parts, used different tools and resources to find a solution, and collaborated with others if necessary.

How do you ensure that your code is maintainable and scalable?
The interviewer is interested in your experience with designing code that is easy to maintain and extend. You should be able to discuss your use of design patterns, principles such as SOLID, and testing frameworks. Emphasize your ability to write code that is easy to understand and modify.

What is your experience with cloud platforms and technologies?
Cloud platforms, such as AWS or Google Cloud, are becoming increasingly important for software development. The interviewer wants to know if you have experience deploying applications on cloud platforms, as well as your familiarity with the relevant tools and technologies. Be prepared to discuss your experience with cloud computing, including your use of tools such as Docker and Kubernetes.

Can you describe a time when you had to lead a team or project?
As a senior software engineer, you may be expected to lead projects or mentor junior team members. The interviewer wants to know about your experience in these roles, as well as your leadership style. Be sure to discuss how you motivated and communicated with team members, and how you managed conflicts or challenges that arose during the project.

What is your experience with design patterns, and can you give an example of when you used one?
The interviewer wants to understand your experience with using design patterns to solve common software problems. Be prepared to discuss the different types of patterns, such as creational, structural, and behavioral, and give an example of how you used one in a previous project.

What is your experience with software testing, and how do you ensure the quality of your code?
The interviewer wants to know about your experience with testing methodologies, such as unit testing, integration testing, and automated testing. Be sure to discuss your use of testing frameworks, such as JUnit or TestNG, and emphasize your commitment to writing testable and maintainable code.

How do you stay up to date with the latest technologies and trends in software development?
The interviewer wants to understand how you keep your skills and knowledge current. Be prepared to discuss the different resources you use, such as industry publications, online courses, or attending conferences. Emphasize your willingness to learn new technologies and your ability to adapt to changing environments.

What is your experience with managing and optimizing software performance?
The interviewer wants to understand your experience with monitoring and optimizing software performance. Be prepared to discuss your use of profiling tools, such as JProfiler or VisualVM, and your ability to identify and fix performance bottlenecks.

What is your experience with database technologies, and how do you ensure the security and integrity of the data?
The interviewer wants to know about your experience with database design and optimization, as well as your ability to ensure the security and integrity of the data. Be prepared to discuss your experience with database technologies, such as SQL or NoSQL databases, and emphasize your commitment to security and privacy.

These are just a few examples of the types of questions you may encounter in a senior software engineer interview. Be sure to prepare thoroughly, practice your responses, and highlight your experience and achievements in each answer. Good luck!


---
Sure, I can help simulate a software system design interview process for a chat app. Here's an example of how the process might go:

Interviewer: Hi, thank you for coming in today. Could you start by telling me about your experience designing software systems?

Interviewee: Yes, of course. I have worked on a variety of software systems in the past, ranging from web applications to mobile apps. In terms of design, I typically start by gathering requirements from stakeholders and users, and then creating an architecture and design that meets those requirements. I also focus on scalability, maintainability, and performance when designing systems.

Interviewer: Great, that sounds like a good approach. Let's move on to the chat app. How would you design a chat app that allows users to send and receive messages in real-time?

Interviewee: Well, the first thing I would consider is the architecture of the app. I would use a client-server architecture where the client communicates with the server to send and receive messages. For real-time messaging, I would use a WebSocket protocol that allows for bi-directional communication between the client and server.

Interviewer: That makes sense. How would you ensure that the app can handle a large number of concurrent users?

Interviewee: To ensure scalability, I would use a distributed architecture where the server is horizontally scaled to handle the load. I would also use a load balancer to distribute the load across multiple servers. In terms of the database, I would use a NoSQL database like MongoDB that can handle large amounts of data and can be scaled horizontally as well.

Interviewer: Good thinking. What about security? How would you ensure that messages are transmitted securely?

Interviewee: For security, I would use SSL/TLS to encrypt the communication between the client and server. I would also use a secure authentication method, such as OAuth, to authenticate users and ensure that only authorized users can send and receive messages.

Interviewer: Excellent. Finally, can you walk me through how you would test the chat app to ensure that it works correctly?

Interviewee: Sure, I would start with unit testing to ensure that each component of the app works as expected. Then, I would move on to integration testing to ensure that the components work together correctly. For real-time messaging, I would use stress testing to ensure that the app can handle a large number of concurrent users. Finally, I would conduct user acceptance testing to ensure that the app meets the requirements of the users.

Interviewer: That sounds like a comprehensive testing plan. Thank you for walking me through your design process. Do you have any questions for me?

Interviewee: No, I think you covered everything. Thank you for the opportunity to interview.


- One of my weaknesses is that I tend to **get too immersed in my work** and can sometimes **lose track of time**. This has caused me to **miss a few deadlines** in the past, which I recognize is not acceptable. However, I've been **actively working** to improve this by setting reminders and using time management tools. I've also started prioritizing my work better, which has helped me become more efficient.
- I think one of my weaknesses is that I tend to **be overly critical of my own work**. While this has led me to **produce high-quality work**, it can also slow me down and **cause unnecessary stress**. To address this, I've started **seeking feedback from my colleagues** earlier in the process, so I can catch any issues before they become major problems. I've also been working on building my confidence in my abilities, which has helped me become more productive.
- That explains it.
- I'd say one of my weaknesses is that I sometimes **struggle with delegating tasks to others**. I like to have control over the work I'm doing and can sometimes forget that there are other people on the team who can help lighten the load. To overcome this, I've been working on identifying tasks that can be delegated and building trust with my colleagues so that I feel more comfortable letting go of some of the control. I've also been focusing on developing my leadership skills, which I think will help me become a better manager in the future.


# Simulate stand up meeting
Team Lead: "Good morning everyone, welcome to our daily stand-up meeting. Let's start with **a quick update** on what everyone worked on yesterday, any **blockers or issues**, and what you plan to work on today."

Developer 1: "Yesterday, I finished working on the **login functionality** and started working on the user profile page. I don't have any **blockers**, but I did **notice that** the design for the user profile page **needs some tweaking**. Today, I **plan to continue working on** the user profile page and **collaborate with** the UI team to make sure the design is **implemented correctly**."

Developer 2: "Yesterday, I worked on **fixing a few bugs** in the messaging system. I **ran into an issue** where the database connection kept timing out, but I was able to **resolve it** by **optimizing** some of the queries. Today, I plan to continue working on the messaging system and **see if I can improve its performance even further**."

Developer 3: "Yesterday, I was working on **integrating** a new payment gateway **into the system**. I ran into some **compatibility issues** with the API, but I was able to **find a workaround**. I don't have any blockers today, but I plan **to do some testing** to make sure everything is **working smoothly** before I **move on to the next task**."

Team Lead: "Great updates, everyone. Does anyone have any questions or **concerns**?"

Developer 1: "I just wanted to clarify the design changes for the user profile page. Should I **reach out to the UI team** or **do you want to handle it**?"

Team Lead: "I think **it would be best** if you collaborate with the UI team directly. I'll make sure to send an email with their contact information after the meeting."

Developer 2: "I also wanted to ask about the **performance metrics** we're using for the messaging system. Do we have any **specific targets** we're **aiming for**?"

Team Lead: "That's a great question. Let's **schedule a meeting** later this week to discuss performance metrics and make **sure we're all on the same page**."

Team Lead: "Alright, that **wraps up** our stand-up meeting for today. Thanks everyone for the updates, and let's continue to work together to make progress on our tasks."

commutative law 交换律


---
- revise beforehand. 提前复习。

- **powerful** & **fast search** and **analitics engine** that work in near real-time.
- it's well known for it's ability to **suggest intelligent base on prior search queries** and **return accurate results for terms entered with misspellling or near matches**.
- Logstash is a powerful, flexible **pipline** that collects, enriches and transports data.
- language agnostic = language neutral = language independant = cross language
- by default, nothing is **purged** in database.
- ${BATCH-SIZE:defaultValue}: bash-style interpolation of envrionment variables



---
- Numeric literals are accpeted by decimal or **scientific notation** with exponent marker(e or E) like 1.2E-3
- `select "from" from "taxi-2023"`, the first indentifier "keyword" should be quoted otherwise it will slashed with the FROM keyword.
- Because the dash is slashed with Date operation supported in index name.
- Single quotes are used with string literals while the double quotes are used by the identifier(column name, table name .etc)
- The operators and the precedence. 操作符和他们的优先情况
- single line comment: double dash 破折号 中杠
- multiple line comment: C-style like /** */


# 2023年10月08日 OKR
1. 提升ES、显微镜的运营能力，并保证可用性>=99.99%，无P3以上事故
   1. 针对显微镜的可靠性、可用性的观测、告警机制建设。
   2. 基础组件的用户使用看板，能够按双周或月提出报表查看各组件的使用情况。
   3. ES事件集群、车辆集群、共享集群、网货集群建设灾备能力，数据达到99.99%可靠。
2. 以助力业务成功为目标，深入参与业务重大技术改造项目、持续迭代现有组件性能与稳定性。
   1. 支持财运通表格引擎二期改造，继续完善ES使用规范。
   2. 财运通司机工资项目按期上线，稳定。
   3. 建设财运通ES的数据灾备和恢复能力，保证数据99.99%可靠。
   4. 一个技术突破点：ES对SQL关联查询的支持，使得业务方使用ES的效率提高90%。
3. 在确保系统稳定的前提下，易流云迁移到华为云。
   1. 完成易流云迁移华为云的xxl job迁移，并确保核心组件的99.99可靠性。
   2. 完成显微镜迁移到腾讯云迁移，业务无感知。

English version:
1. Enhance operational capability of Elasticsearch and Matomo, ensuring four-nines availability with no incidents rated P3 or higher.
   1. Develop observabilty and alerting machanism for Matomo's reliability and availability.
   2. Implement user dashboard for essential components by offering bi-weekly or monthly report on component usage.
   3. Establish disaster recovery capabilites for Elasticserach clusters, achiveing four-nines data reliability.
2. With a focus on enabling business success, actively engage in major techical transformation projects, and continuously iterate on perfomance and stability of existing components.
   1. Support Phase 2 transformation of CYT table engine, further refining Elasticearch usage guidelines.
   2. Ensure the on-time launch and stability of the CYT driver salary project.
   3. Build data backup and recovery capabilities of CYT ES, ensuring four-nines data reliability
   4. Achieve a technical break-through: Enhance ES suport for SQL join queries, improving development efficiency by 90%.
3. With ensuring system stability, migrate E6Cloud to Huawei Cloud.
   1. Complete the migration of E6Cloud's xxljob to HuaweiCloud, ensuring the core component's four-nine reliability.
   2. Successfully migrate the Matmo to Tencent Cloud with zero business disruption.

Build, implement, develop, establish, 
Enhance, continuouly iterate, further refine, with a foucus on,
Migrate, zero business disruption.

# 2023-10-21
- I like broad scope of studies.
- microeconomics and macroeconomics


# metrics-driven
- The rafactor planning is **metrics-driven**, focusing on reducing **technical debt**, requires the **stakeholder buy-in** from VP of engineering.
- We need to present this proposal in a metrics-driven way and address the security concern in the **Q&A session**.
- The decison to scale is metrics-driven, the latency increased by 200% last month.
- 

# tech debt
to pay/triage/reduce/avoid tech debt
In our quarterly meeting 季度会议, we will conduct **technical debt triage** to prioritize critial refactoring 技术债分类
The login modules tech debt is causing 40% of our P1 bugs.
Why should we puase new features to pay down tech debt? The client expect updates next month


# critical service
non-critical service

# buy vs. build
The **buy vs. build analysis** shows that licensing a CMS is faster but **limits customization**. but all the provided features meets our requirements.
Buying this SaaS tools save our 6 month of dev time - buy vs. build case is clear.
build core system in-house 自研核心系统


# influence without authority
As a staff engineer, I **drive architectual changes** through influence with authority.
Build trust via data-sharing, not mandates(命令\授权)
I use **metrics-driven arguments** to influcence without authority on **adopting GraphQL**.


Through influence without authority, we drove the tech debt triage for critial modules and decided to build core system in-house.

# Career growth and promotion


