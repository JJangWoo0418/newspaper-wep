// src/data/articles.ts

export type Article = {
    id: string;          // "/article/[id]" 에서 쓸 id
    title: string;       // 기사 제목
    category: string;    // "경제", "세계" 등
    summary: string;     // 목록/상단 카드에서 쓸 짧은 요약
    content: string;     // 상세 페이지 본문 전체
    reporter: string;    // 기자/출처 정보
    date: string;        // "2025-11-22" 이런 형식
    imageUrl: string;    // /public/images/...  또는 외부 URL
    source?: string;     // 선택: "BBC", "CNN" 등
    link?: string;       // 선택: 원문 링크
    related?: string[];
};

export const ARTICLES: Article[] = [
    {
        id: "1",
        title: "Bomb Threats Target Democratic Lawmakers After Trump ‘Traitors’ Posts",
        category: "정치",
        summary:
            "Bitcoin 가격이 급락하며 투자자들이 위험 자산에서 발을 빼고 있습니다. 연준의 금리 인하 불확실성이 시장 전반에 영향을 주고 있습니다.",
        content: `
  Five out of the six Democratic lawmakers who called on the military to “refuse illegal orders” from the administration have received bomb threats after President Donald Trump accused them of “seditious behavior” he considered “punishable by death.”
On Friday, the offices of Senator Elissa Slotkin, as well as Representatives Jason Crow, Chrissy Houlahan and Chris Deluzio said that their offices had received bomb threats. Meanwhile, police in Concord, New Hampshire, responded to a bomb threat at the local office of Representative Maggie Goodlander on Friday afternoon.
Newsweek called the members of Congress on Saturday morning for comment. Newsweek also contacted the White House via email for comment on the bomb threats.
The escalation of threats against sitting members of Congress comes amid heightened bipartisan concerns over the rising tide of politically motivated violence in the U.S.
The White House and the president himself have downplayed his remarks as charged rhetoric, and denied that these constituted direct threats against the lawmakers. But his comments have sparked condemnation from the Democratic party.
  `.trim(),
        reporter: "Anna Commander",
        date: "2025-11-21",
        imageUrl: "https://assets.newsweek.com/wp-content/uploads/2025/11/32-split-screen-wcircle-inset-1.png?w=1600&quality=80&webp=1", // 너가 public/images에 넣을 파일
        source: "Demo News",
        link: "https://example.com/original-article",
    },
    {
        id: "2",
        title: "JD Vance Reacts to Donald Trump’s Viral Moment With Zohran Mamdani",
        category: "정치",
        summary:
            "에드워드 그렉슨의 협주곡들을 묶은 새로운 음반이 영국 클래식 음악계에서 주목받고 있습니다.",
        content: `
  Vice President JD Vance reacted to President Donald Trump's viral moment with New York City Mayor-elect Zohran Mamdani on Friday in the Oval Office, calling it an "all-timer."
  The first Oval Office meeting between Trump and the incoming mayor drew attention far beyond typical city politics. The encounter, marked by viral moments, potentially illustrated shifting strategies for both major parties and elevated the national profile of a mayoral transition.
  As both men have previously exchanged strong criticisms, their cooperative tone could influence partisan dynamics and urban policy discussions at a pivotal moment in U.S. politics.
  Trump and Mamdani, who have frequently traded barbs, surprised many with their amicable tone. At issue were not only the city’s affordability crisis and rising living costs but also the months of incendiary rhetoric—Trump had repeatedly called Mamdani a “communist” and threatened to withhold federal funds, while Mamdani has labeled Trump a “fascist.”
  During the press availability, when pressed about Mamdani’s previous descriptions, Trump responded with humor: “I’ve been called much worse than a despot. So, it’s not that insulting.” Trump later continued to lighten the moment by patting Mamdani on the arm and telling him, “That’s OK, you can just say yes. I don’t mind.”
  `.trim(),
        reporter: "Anna Commander",
        date: "2025-11-21",
        imageUrl: "https://assets.newsweek.com/wp-content/uploads/2025/11/GettyImages-2247652374.jpg?w=1600&quality=80&webp=1",
        source: "Demo News",
    },
    {
        id: "3",
        title: "Hot College Coaching Candidate Could be Package Deal With 3,000-Yard QB",
        category: "스포츠",
        summary:
            "에드워드 그렉슨의 협주곡들을 묶은 새로운 음반이 영국 클래식 음악계에서 주목받고 있습니다.",
        content: `
        “Morris is among the leading candidates for multiple Power 4 openings,” Lederman wrote. “Mestemaker will instantly become one of the cycle’s most attractive transfer quarterbacks if he enters the portal after this season.
        “There’s a real possibility that Mestemaker could follow Morris to his next school, as Ward did when Morris left Incarnate Word for Washington State in 2022, presenting an intriguing package deal.”
        The 40-year-old Morris has led the Mean Green to a 9-1 record this season, and he has them in contention for an AAC championship. Wins over Rice and Temple over the next two weeks certainly bode well for North Texas’ chances of playing in the AAC Championship Game.
        Morris has also worked with several elite college quarterbacks including Baker Mayfield, Patrick Mahomes, Cam Ward, and John Mateer, and he’s turned Mestemaker into one of the country’s top signal-callers.
The 6-foot-4 redshirt freshman currently ranks fifth in the nation in passing yards (3,000), seventh in touchdowns (23), and 15th in completion percentage (69.3) among qualified QBs.
Luring a head coach who could also bring one of the country’s top passers may be appealing to schools like Arkansas, Auburn, Stanford, and UCLA.
  `.trim(),
        reporter: "Michael Gallagher",
        date: "2025-11-22",
        imageUrl: "https://assets.newsweek.com/wp-content/uploads/2025/11/GettyImages-2236469336.jpg?w=1600&quality=80&webp=1",
        source: "Demo News",
    },
    {
        id: "4",
        title: "How to Watch Trail Blazers vs Warriors: Live Stream NBA Friday, TV Channel",
        category: "스포츠",
        summary:
            "에드워드 그렉슨의 협주곡들을 묶은 새로운 음반이 영국 클래식 음악계에서 주목받고 있습니다.",
        content: `
  Portland is coming off one of the more crushing defeats they’ve endured in recent memory, a 122-121 loss to the visiting Chicago Bulls. In the game, the Blazers trailed by 21 with 9:16 left in the fourth quarter, before going on a 28-7 run over the next eight minutes, tying the game at 116-116 with 1:22 remaining. The Blazers would score the next four points, taking a 120-116 lead with 13 seconds left before giving up a 3-pointer to Coby White and then another to Nikola Vucevic at the buzzer for the loss.
  The Warriors have been wildly inconsistent as of late, winning games by 31 (vs. Indiana) before turning around and losing by 24 (vs. Oklahoma City). They’re currently on a two-game losing streak, having dropped games on back-to-back nights to the Orlando Magic (121-113) and the Miami Heat (110-96). In the loss to the Heat, the Warriors played without both Steph Curry and Draymond Green, leaving Brandin Podziemski to shoulder the offensive load for the starters, finishing with 20 points.
  This is a great NBA Basketball matchup that you will not want to miss; make sure to tune in and catch all the action.

Live stream Portland Trail Blazers at Golden State Warriors on Fubo: Watch the event now!

You can live stream NBA games all season long with Fubo, who offer a free trial. They carry all the channels you need, never to miss the action, including nationally broadcast channels like ESPN, NBC, ABC, and NBA TV, as well as local team coverage.

Regional restrictions may apply. If you purchase a product or register for an account through one of the links on our site, we may receive compensation.
  `.trim(),
        reporter: "Ben Verbrugge",
        date: "2025-11-22",
        imageUrl: "https://assets.newsweek.com/wp-content/uploads/2025/11/GettyImages-2240854806.jpg?w=1600&quality=80&webp=1",
        source: "Demo News",
    },
    {
        id: "5",
        title: "MAGA Reacts to Donald Trump’s Praise of Zohran Mamdani",
        category: "세계",
        summary:
            "에드워드 그렉슨의 협주곡들을 묶은 새로운 음반이 영국 클래식 음악계에서 주목받고 있습니다.",
        content: `
  MAGA social media users shared reactions following President Donald Trump’s meeting with New York City Mayor-elect Zohran Mamdani on Friday. 

Trump and Mamdani said they spoke about their shared goals to help New York City during the meeting, with the president telling reporters that he was surprised by their “great” exchange. 

“I think he is going to surprise some conservative people, actually,” Trump said. 

Mamdani had previously called himself “Donald Trump’s worst nightmare,” and Trump had called Mamdani a “100% Communist Lunatic” and “total nut job.” 
“Johnny MAGA,” who has about 265,000 followers on X, called it an “incredible moment in the Oval as Trump extends the olive branch to Zohran.”  

“MAGA Voice,” with around 1.3 million followers on X, said the president “has Zohran Mamdani shaking his head yes the whole time,” adding, “This was such a power move by President Trump.” 

User “MJTruthUltra,” who has about 597,200 followers on X, said, “Trump and Mamdani exchange niceties and talk about their ‘mutual respect' they have for one another I wasn’t expecting this… you?” 
“DogRightGirl,” with about 346,900 followers on X, said, “Trump is in complete control and relaxed. Mamdani is out of his league and nervous.” 

Why It Matters 
Trump had repeatedly called Mamdani a “communist.” Before the New York City mayoral election, the president said on social media that if Mamdani were to win, "it is highly unlikely that I will be contributing Federal Funds, other than the very minimum as required." 

Mamdani defeated former Governor Andrew Cuomo, who ran as an independent, and Republican Curtis Sliwa. Trump voiced support for Cuomo the day before the election on social media. 

New York's mayor-elect directly addressed the president in his victory speech earlier this month, saying, “Donald Trump, since I know you’re watching, I have four words for you: Turn the volume up.” 
  `.trim(),
        reporter: "Jenna Sundel",
        date: "2025-11-21",
        imageUrl: "https://assets.newsweek.com/wp-content/uploads/2025/11/AP25325747092387.jpg?w=1600&quality=80&webp=1",
        source: "Demo News",
    },
    {
        id: "6",
        title: "Supreme Court Weighs Decision on Birthright Citizenship",
        category: "세계",
        summary:
            "에드워드 그렉슨의 협주곡들을 묶은 새로운 음반이 영국 클래식 음악계에서 주목받고 있습니다.",
        content: `
  The U.S. Supreme Court is meeting in private on Friday to consider taking on President Donald Trump’s order ending birthright citizenship for children born in the United States to noncitizen parents, according to the Associated Press.
  Why It Matters
Moments after taking office for his second term, Trump signed an executive order titled "PROTECTING THE MEANING AND VALUE OF AMERICAN CITIZENSHIP.” Trump's executive action seeks to prevent children born on U.S. soil from automatically receiving citizenship if neither parent was an American citizen or lawful permanent resident at the time of birth.

The concept of birthright citizenship has long been established in the U.S., with the 14th Amendment of the U.S. Constitution guaranteeing citizenship to "all persons born or naturalized in the United States."

Trump pledged to launch the largest mass deportation operation in U.S. history. His administration reported in September that “2 million illegal aliens have been removed or self-deported in just 250 days.”
What To Know
The executive order has faced several legal challenges and has not taken effect. Several lower courts have struck it down, with the administration currently appealing two cases. The Supreme Court considers what cases it will take during closed meetings. The Federal Judicial Center, a research and education agency of the U.S. judiciary, says that at least four of the Court's justices must vote to grant a writ of certiorari for the case to be taken.
  `.trim(),
        reporter: "Mandy Taheri",
        date: "2025-11-21",
        imageUrl: "https://assets.newsweek.com/wp-content/uploads/2025/11/AP25311637040266.jpg?w=1600&quality=80&webp=1",
        source: "Demo News",
    },
    {
        id: "7",
        title: "New Fluoride Study Challenges Trump Admin Stance",
        category: "건강",
        summary:
            "에드워드 그렉슨의 협주곡들을 묶은 새로운 음반이 영국 클래식 음악계에서 주목받고 있습니다.",
        content: `
  People exposed to the recommended levels of fluoride in drinking water do not experience negative cognitive impacts, a new study found, contrasting the studies citied by the Trump administration on the subject.

Health Secretary Robert F. Kennedy Jr. has long been an advocate for removing fluoride from drinking water, citing studies that found a correlation between fluoride in drinking water and a reduction in child IQ.

Some states - such as Florida and Utah - have already taken measures to ban the addition of fluoride to public drinking water systems, however, this latest study suggests that fluoride may not have a negative impact on cognitive health, and possibly the opposite effect.

Newsweek has contacted HHS via email for comment.

Fluoride has been added to drinking water for decades, on the basis it helps strengthen tooth enamel, making it more resistant to acid attacks from plaque, bacteria and sugars.

However, the practice recently became more controversial when research unveiled the health risks associated with higher levels of exposure to fluoride, and a growing movement of people began to say the addition of the substance to their water was an infringement on their rights.

Some scientists have since responded to these concerns, noting that it is not the substance, but the dose, that should be of concern—a dose that can be regulated and controlled to remain at safe levels.
  `.trim(),
        reporter: "Jasmine Laws",
        date: "2025-11-20",
        imageUrl: "https://assets.newsweek.com/wp-content/uploads/2025/11/Untitled-design-30.png?w=1600&quality=80&webp=1",
        source: "Demo News",
    },
    {
        id: "8",
        title: "Teamsters Accuse Henry Ford Health of Unfair Labor Practices",
        category: "건강",
        summary:
            "에드워드 그렉슨의 협주곡들을 묶은 새로운 음반이 영국 클래식 음악계에서 주목받고 있습니다.",
        content: `
  The union representing nurses at Michigan's Henry Ford Genesys Hospital filed multiple unfair labor practices against the hospital amid a two-month-long labor strike over ongoing contract negotiations. 

According to a press release shared with Newsweek, Teamsters Local 332 is accusing the hospital of refusing to meet and bargain with the union, declaring an illegal and fake impasse and threatening Teamster nurses.  

Henry Ford Health said in a statement to Newsweek that it is complying with all applicable federal and state labor laws and has been negotiating in good faith.

Nurses at Henry Ford Genesys Hospital have been on strike since September 1, over calls for safe and improved working conditions. Contract negotiations have been ongoing since April, with the parties meeting more than 60 times.  

Specifically, the union is fighting for safe nurse-to-patient ratios, fair wages, better working conditions and compliance with federal labor laws, in addition to improved transparency and good faith collaboration from their employer.  

Stephanie Bates, assistant chief steward of Teamsters Local 332, told Newsweek that the nurses are on strike because Henry Ford Health still refuses to deliver on a fair contract and address our safety concerns.

"They boast about imposing contract terms that we never agreed to — that’s how little they respect us," she said. "They are putting patients and staff in danger, and we are out here because we love our profession and we are fighting to protect it. Health care workers and patients deserve to be valued yet this hospital only cares about profit."

Henry Ford Health has maintained that it’s negotiating in good faith and has accused Teamster leadership of using the nurses' strike to push a national agenda.  

Earlier this month, the hospital announced that it would be implementing some of its proposed terms, including a salary increase, claiming that talks between the parties had “reached an impasse.” 

Teamsters Local 332 President Dan Glass told Newsweek that there is no such impasse and that the hospital is “"attempting to illegally implement terms and conditions.” He said Henry Ford Health has refused to provide information about proposals to the union’s bargaining team and will not schedule more bargaining dates.
  `.trim(),
        reporter: "Lauren Giella",
        date: "2025-11-20",
        imageUrl: "https://assets.newsweek.com/wp-content/uploads/2025/10/health-care-workforce-issues-strikes-c-suite-changes-major-layoffs-1.png?w=1600&quality=80&webp=1",
        source: "Demo News",
    },
    {
        id: "9",
        title: "Google Boss Issues Warning Ahead of Gemini 3.0 Launch",
        category: "경제",
        summary:
            "에드워드 그렉슨의 협주곡들을 묶은 새로운 음반이 영국 클래식 음악계에서 주목받고 있습니다.",
        content: `
  The CEO of Google and its parent company Alphabet has issued stark warnings about users “blindly” trusting artificial intelligence, as well as the potential impacts should the financial “bubble” forming around the technology eventually burst.

In an interview with the BBC, Sundar Pichai said that AI was “prone to errors,” and warned against the exclusive reliance on chatbots for research. People, he told the outlet, "have to learn to use these tools for what they're good at, and not blindly trust everything they say."

Pichai went on to warn of “irrationality” in the current AI investment boom, and said that “no company is going to be immune” should there be a market correction at some point.

The comments come ahead of the long-awaited launch of the next‑generation version of Google's DeepMind AI, Gemini 3.0, and reflect growing concerns among even AI’s most enthusiastic investors and pioneers that caution and safeguards are necessary to prevent it from getting out of control.

Spending on AI among Big Tech firms is estimated to have reached $400 billion annually, and some projections say this could grow to $2 trillion a year by the end of the decade. High levels of investment in AI-focused firms has been credited with many of the stock market’s recent gains, but this speculative spending without tangible payoffs has concentrated value in a handful of AI-bullish tech stocks while raising fears that a correction could have significant consequences for the wider economy.

Pichai’s comments regarding the AI bubble “bursting” echo those made by OpenAI CEO Sam Altman, who in August told reporters, as reported by CNBC, that “investors as a whole are overexcited about AI,” while comparing current conditions to the dotcom boom of the late 1990s.
  `.trim(),
        reporter: "Hugh Cameron",
        date: "2025-11-18",
        imageUrl: "https://assets.newsweek.com/wp-content/uploads/2025/11/GettyImages-2224341249.jpg?w=1600&quality=80&webp=1",
        source: "Demo News",
    },
    {
        id: "10",
        title: "Princeton University Informs Students of Data Breach",
        category: "경제",
        summary:
            "에드워드 그렉슨의 협주곡들을 묶은 새로운 음반이 영국 클래식 음악계에서 주목받고 있습니다.",
        content: `
  Princeton University on Saturday sent a message to people - including students, alumni, donors, some faculty, and parents - whose information may have been accessed during a data breach that lasted "less than 24 hours."

The breach occurred on November 10, with the notice sent out by the week to notify the university community that their information may have been accessed by "outside actors."

"While our investigation is ongoing, we are reaching out to you now to urge you to be alert for unusual messages that purport to come from the University. No one from Princeton University should ever call, text, or email you asking for sensitive information such as Social Security numbers, passwords, or bank information," the notice said.
Phishing involves attempts to solicit personal information from an individual, including passwords or bank account details, by using deceptive texts or emails: For example, New York state this week warned that spam messages through its official texts message updates.

The state quickly sent out a follow-up message warning residents not to reply to the previous message or call the phone number it mentioned.
Princeton opened an investigation after discovering the incident and removing the attacker or attackers from the school's systems, again stressing that the breach lasted under 24 hours, adding that the school believes no other systems were compromised during the attack.
The school also said it does not know what information may have been accessed, but will provide updates as the full scope of the attack becomes clearer.

The school confirmed that the compromised database did not include Social Security numbers, passwords, or financial information, and the database contained no personal information, such as names, email addresses, telephone numbers, and addresses.

However, the database may have contained information about fundraising activities and donations made to the university and "engagement activities."

The school also revealed that the breach occurred following a phone phishing incident that targeted a school employee with "ordinary access" to the database in question. The school received no demands around the attack.
  `.trim(),
        reporter: "Peter Aitken",
        date: "2025-11-15",
        imageUrl: "https://assets.newsweek.com/wp-content/uploads/2025/11/GettyImages-1496373450.jpg?w=1600&quality=80&webp=1",
        source: "Demo News",
    },
    {
        id: "11",
        title: "Why Jen Shah Is Being Released From Prison Early",
        category: "연예",
        summary:
            "에드워드 그렉슨의 협주곡들을 묶은 새로운 음반이 영국 클래식 음악계에서 주목받고 있습니다.",
        content: `
  Former Real Housewives of Salt Lake City star Jen Shah will be released from the Federal Prison Camp in Bryan, Texas, on December 10, according to People. Shah has been serving a prison sentence since February 2023.

Shah was originally sentenced to 6.5 years in prison after pleading guilty in a telemarketing fraud scheme. She was also ordered to pay over $6.5 million in restitution.

She's had her sentence reduced several times, including one year taken off in March 2023 and an eight-month reduction in October 2024. Her sentence was reduced again in January and August, moving her new release to August 2026, before Friday's announcement she would be released on December 10.

The Federal Bureau of Prisons has said Shah's reductions have been due to her good behavior, participation in prison programs and starting to make restitution payments to victims, People reported.
"Everyone's very grateful for the BOP's decision, especially because it means Jen will be able to reunite with her family for the holidays," Shah's manager, Chris Giovanni, told People. "It's a gift she doesn't take for granted."

A representative for the Federal Bureau of Prisons told the outlet, "For privacy, safety, and security reasons, we do not discuss any incarcerated individual’s conditions of confinement or specific release plans."

Newsweek reached out to Giovanni and the Federal Bureau of Prisons for comment.
  `.trim(),
        reporter: "Jenni Fink and Jenna Sundel",
        date: "2025-11-21",
        imageUrl: "https://assets.newsweek.com/wp-content/uploads/2025/11/GettyImages-1454684323.jpg?w=1600&quality=80&webp=1",
        source: "Demo News",
    },
    {
        id: "12",
        title: "Shep Rose Net Worth as ‘Southern Charm’ Star Gets Called ‘Cheap’",
        category: "연예",
        summary:
            "에드워드 그렉슨의 협주곡들을 묶은 새로운 음반이 영국 클래식 음악계에서 주목받고 있습니다.",
        content: `
  Southern Charm’s Shep Rose’s family has so much money, he doesn’t have to work, which made it surprising to castmate Austen Kroll how “cheap” he was being while they were shopping for castmate Madison LeCroy’s baby gift.
  Rose’s financial situation has been a topic of the show since the very beginning. From an old Southern family, he's been provided the freedom to live life without the responsibility most people have. That’s caused tension with castmate Craig Conover, who was in a drastically different financial situation at the start of the show, and with his ex-girlfriend, Taylor Ann Green, who criticized him for getting a monthly check from his parents.
  In the season 11 premiere of Southern Charm, Rose and Kroll go to a boutique in town to find a baby shower gift for LeCroy. At one point, they consider a white rocking horse, but Rose appears to be hesitant, saying it’s $150.  
“Oh shut up, Shep,” Kroll said. “As if you care, dude, it’s fine.”
In a later confessional interview, Kroll said it “shocks” him how cheap Rose is, calling him “Mr. Trustfund.” The two end up settling on a $350 giant stuffed teddy bear as an homage to LeCroy’s daughter’s name, Teddi.
There’s no definitive, publicly available figure for Rose’s net worth, but the properties he owns are estimated at $5 million, according to Zillow.  Rose owns a property on Sullivan's Island, according to records reviewed by Newsweek, that’s worth an estimated $3.2 million. A property he owns in the Isle of Palms is worth an estimated $1.7 million.
It’s unclear how much the cast each makes from the show, but various reports have the range being about $25,000 in early seasons and a pay increase to $80,000 in later seasons. 
  `.trim(),
        reporter: "Jenni Fink",
        date: "2025-11-15",
        imageUrl: "https://assets.newsweek.com/wp-content/uploads/2025/11/GettyImages-1435942198.jpg?w=1600&quality=80&webp=1",
        source: "Demo News",
    },
];
