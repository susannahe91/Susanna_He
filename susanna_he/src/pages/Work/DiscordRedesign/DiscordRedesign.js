import React, { useEffect } from "react";
import "./DiscordRedesign.css";
import OverviewSlide from "../../../components/OverviewSlide/OverviewSlide";
import TextSlide from "../../../components/TextSlide/TextSlide";
import ImageSlide from "../../../components/ImageSlide/ImageSlide";
import ImageWithCaption from "../../../components/ImageWithCaption/ImageWithCaption";
import QuoteCard from "../../../components/QuoteCard/QuoteCard";

import dr_banner from "../../../assets/dr_banner.webp";
import core_issues from "../../../assets/dr_core_issues.webp";
import p1_apply from "../../../assets/dr_p1_apply.gif";
import p1_create from "../../../assets/dr_p1_create.gif";
import p2_following from "../../../assets/dr_p2_following_list.gif";
import p2_follow from "../../../assets/dr_p2_follow_server.gif";
import p1_finding from "../../../assets/dr_p1_finding.webp";
import p2_finding from "../../../assets/dr_p2_finding.webp";
import final from "../../../assets/dr_final.webp";

function DiscordRedesign({ onPageChange }) {
  useEffect(() => {
    onPageChange("Discord Redesign");
  }, [onPageChange]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ImageWithCaption
        captionHeading="Discord Redesign"
        captionText="
        Redesigning Discord’s server notification management system on mobile to make it less time-consuming and tedious for users to manage their notifications and settings across multiple servers."
        image={dr_banner}
        imageAltText="alt"
        isImageBanner={true}
        // titleBanner={[true, "rgba(230, 205, 255)"]}
        titleBanner={[true, ""]}
      />

      <OverviewSlide
        problemHeading="Managing notification settings across multiple Discord servers is too time-consuming and tedious"
        problemText="Discord users who are in multiple servers are forced to go through each of their servers individually in order to manage their notification settings, a process which often involves a lot of repetition of the same actions. The tedium of the process only increases with each server that a user joins."
        solutionHeading="Grant users the ability to create and apply notification setting presets to apply to multiple servers at once"
        solutionText="Our final design introduced the idea of notification setting presets to Discord. With presets, users would only have to create presets with their intended notification settings once, and then apply those presets to many servers at once, immensely speeding up the whole server notification management process."
        primaryColor="rgba(88, 101, 218, 0.15)"
        secondaryColor="rgba(88, 101, 218, 0.6)"
        studyDetails={[
          "UX Research & Design (team of 4)",
          "Miro, Figma",
          "Nov 2022 – Dec 2022",
        ]}
      />

      <TextSlide
        slideHeading="Research Methods"
        slideText={[
          "The first step in our redesign process was to carry out comprehensive user research to inform our design decisions. Our approach involved conducting interviews with active Discord users, during which they were asked to perform specific tasks within the app so that we could get a glimpse of their thought processes and examine any pain points. Additionally, we carried out comparative studies of a few other apps’ notification management systems to deepen our understanding of design possibilities and practices within the domain.",
        ]}
        slideDetails={[
          ["8", "user interviews"],
          ["20+", "cognitive walkthroughs"],
          ["3", "comparative studies"],
        ]}
      />

      <ImageWithCaption
        captionHeading="Core Issues"
        captionText="
        A summary of our initial research findings."
        image={core_issues}
        imageAltText="alt"
        isImageBanner={true}
        expandBg="rgba(255, 255, 255, 1)"
      />

      <TextSlide
        slideHeading="Design Process"
        slideText={[
          "Four sets of initial sketches were quickly drawn to explore varied solutions to Discord’s server notification management issues. These iterations drew a bit of inspiration from our findings from our competitive analyses that we performed during the research phase. Due to time limitations, we immediately transitioned into high-fidelity prototypes from these sketches, and selected two distinct design directions, each with a different user flow. We aimed to capture diverse user feedback during the testing of our two sets of high-fidelity prototypes.",
        ]}
        slideDetails={[]}
      />

      <ImageSlide
        slideTopic="Prototype I"
        slideHeading="Creating Presets"
        slideImage={p1_create}
        slideText={[
          "Through either their 'Server Settings' menu or the 'More Options' > 'Notification Settings' menu, users can create and save a notification preset, in the same way that they'd adjust the notification settings for a server individually.",
        ]}
        imageRight={false}
        bgColor="rgba(0, 0, 0, 1)"
      />
      <ImageSlide
        slideTopic="Prototype I"
        slideHeading="Applying Presets"
        slideImage={p1_apply}
        slideText={[
          "From the same menus mentioned above, users can apply their saved notification presets onto either individual servers, or multiple servers contained within the same folder by tapping on that preset. This would apply all the same notification settings the user set for that preset onto whichever server(s) they apply the preset to.",
        ]}
        imageRight={true}
        bgColor="rgba(0, 0, 0, 1)"
      />

      <ImageSlide
        slideTopic="Prototype II"
        slideHeading="Following List"
        slideImage={p2_following}
        slideText={[
          "Users can access and manage the list of servers and/or channels that they are following (that they receive notifications from) through their 'Following List', which would be accessed through a new 'Following' menu.",
        ]}
        imageRight={false}
        bgColor="rgba(0, 0, 0, 1)"
      />

      <ImageSlide
        slideTopic="Prototype II"
        slideHeading="Following a Server"
        slideImage={p2_follow}
        slideText={[
          "From within a server itself, users can either select individual channels to follow/unfollow, or follow/unfollow the entire server (all of its channels).",
        ]}
        imageRight={true}
        bgColor="rgba(0, 0, 0, 1)"
      />

      <TextSlide
        slideHeading="Testing & Iteration"
        slideText={[
          "We conducted usability testing with active Discord users on our two high-fidelity prototypes. Each user performed tasks on both prototypes. Our goal was to identify the design solution that best addressed the problem while pinpointing strengths and areas for improvement between the prototypes.",
        ]}
        slideDetails={[
          ["2", "prototypes"],
          ["8", "usability tests"],
          ["20+", "tasks observed"],
        ]}
      />

      <ImageSlide
        slideTopic="Usability Finding I"
        slideHeading="The server and channel follow functions lack discoverability"
        slideImage={p2_finding}
        slideBullets={[
          "Most test participants either did not realize that there was a follow button, or expressed confusion at how to follow a few channels instead of the whole server",
          "Some users found it unclear whether tapping the 'unfollow' button would unfollow the entire server, or just the channels selected",
        ]}
        imageRight={true}
        bgColor="rgba(88, 101, 218, 1)"
      />

      <ImageSlide
        slideTopic="Usability Finding II"
        slideHeading="It should take less taps to access the notification preset menu"
        slideImage={p1_finding}
        slideText={[
          "Since creating a notification preset already takes a couple of taps, some test participants did not like how multiple taps were needed to access its menu from the server icon and then from the 'More Options' menu.",
        ]}
        imageRight={false}
        bgColor="rgba(88, 101, 218, 1)"
      />

      <QuoteCard
        quoteText="Customizing notifications using the presets was a breeze. It felt like using presets in a video game – familiar and intuitive. Managing notifications across my servers became quicker and simpler."
        quoteSource="Usability Test Participant"
      />

      <ImageSlide
        slideTopic="Final Design Solution"
        slideHeading="Server Notification Presets"
        slideImage={final}
        slideText={[
          "After analyzing our testing results and weighing the tradeoffs, we selected our Discord notifications preset solution. This solution not only significantly reduced the time required to manage notifications across multiple servers but also proved to be reasonably intuitive.",
        ]}
        imageRight={true}
        // textBgColor="rgba(88, 101, 218, 1)"
      />

      <TextSlide
        slideHeading="Reflections & Next Steps"
        slideText={[
          "Given the time constraints of the project, our iterative process was more condensed than ideal. Nonetheless, we managed to zero in on a design solution that effectively addressed the problem with Discord's server notification management process. With more time, our next steps would involve refining the design based on our usability testing insights. We'd iterate further, integrating these learnings and running additional usability tests in order to create a more polished final product.",
          // "",
        ]}
        slideDetails={[]}
      />
    </div>
  );
}

export default DiscordRedesign;
