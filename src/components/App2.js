import { Suspense, memo, useEffect, useState, useTransition } from "react";

function TabButton({ children, isActive, onClick }) {
  if (isActive) {
    return <b>{children}</b>;
  }
  return <button onClick={onClick}>{children}</button>;
}

function AboutTab() {
  return <p>Welcome to my profile!</p>;
}

function ContactTab() {
  return (
    <>
      <p>You can find me online here:</p>
      <ul>
        <li>admin@mysite.com</li>
        <li>+123456789</li>
      </ul>
    </>
  );
}

const PostsTab = memo(function PostsTab() {
  // Log once. The actual slowdown is inside SlowPost.
  console.log("[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />");

  const start = Date.now();

  // let startTime = performance.now();

  // while (performance.now() - startTime < 1000) {
  //   // Do nothing for 1 ms per item to emulate extremely slow code
  // }

  console.log("Start", start);

  let items = [];
  for (let i = 0; i < 400; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }

  console.log("Profile ends", Date.now() - start);

  return <ul className="items">{items}</ul>;
});

const SecondPart3 = () => {
  const time = Date.now();

  console.log("SecondPart3");

  while (Date.now() - time <= 1000) {}

  return <>Second Part 3</>;
};

function SlowPost({ index }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 5) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  console.log(index);

  if (index === 500) {
    console.log("End", Date.now());
  }

  return (
    <>
      <li className="item">Post #{index + 1}</li>
      {/* <SecondPart3 />;
      <SecondPart3 />;
      <SecondPart3 />;
      <SecondPart3 />;
      <SecondPart3 />;
      <SecondPart3 />;
      <SecondPart3 />;
      <SecondPart3 />;
      <SecondPart3 />;
      <SecondPart3 />;
      <SecondPart3 />;
      <SecondPart3 />;
      <SecondPart3 />;
      <SecondPart3 />; */}
    </>
  );
}

export function App2() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("about");

  // function selectTab(nextTab) {
  //   startTransition(() => {
  //     setTab(nextTab);
  //   });
  // }

  return (
    <>
      <TabButton isActive={tab === "about"} onClick={() => setTab("about")}>
        About
      </TabButton>
      <button
        style={isPending ? { backgroundColor: "blue", color: "white" } : {}}
        onClick={() => {
          startTransition(() => {
            setTab("posts");
          });
        }}
      >
        Posts (slow)
      </button>
      <TabButton isActive={tab === "contact"} onClick={() => setTab("contact")}>
        Contact
      </TabButton>
      <hr />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </>
  );
}
