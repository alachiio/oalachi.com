import WorkExperience from "@/components/experience/WorkExperience";
import WorkExperienceItem from "@/components/experience/WorkExperienceItem";
import PageTitle from "@/layout/PageTitle";

export default function ExperiencePage() {
    return (
        <>
            <PageTitle h5="previous" h1="Work Experience" p="Here are the last 4 places I have shared my skills with" />
            <section className="bg-white dark:bg-slate-900 py-16 relative z-10 min-h-screen">
                <div className="container lg:max-w-screen-xl lg:px-0 px-10 mx-auto">
                    <WorkExperience>
                        <WorkExperienceItem date="Mar 2020 - Present" title="Full Stack Developer" company="Tawrid Export | Istanbul, Turkey">
                            <ul className="ms-4 list-disc flex flex-col gap-1">
                                <li>Creating products management page that helps employee to categorize and group products easily and quickly.</li>
                                <li>Developed a new module for loading officer, this feature helped clients to see aninstantly updated loading report for their orders.</li>
                                <li>implemented a third-party api for e-invoice reading, this feature saved the employee’s time and effort by just inserting the invoice reference uuid</li>
                            </ul>
                        </WorkExperienceItem>
                        <WorkExperienceItem date="Nov 2018 - Mar 2020" title="Frontend Developer" company="Imtilak Real Estate | Istanbul, Turkey">
                            <ul className="ms-4 list-disc flex flex-col gap-1">
                                <li>
                                    Built Imtilak Channel section in imtilak real estate website using youtube api so thevisitors can watch the channel videos without going to youtube.
                                    <a className="text-slate-900 dark:text-white underline ms-1" href="https://www.imtilak.net/en/turkey/channel" target="_blank">Visit Website</a>
                                </li>
                                <li>
                                    Built IMT Events website for events planning & implementation :
                                    <a className="text-slate-900 dark:text-white underline ms-1" href="https://imtevents.com/en" target="_blank">Visit Website</a>
                                </li>
                                <li>Developed email templating and email marketing platform to send marketing emails tothe subscribers using redis-cli and beanstalkd for queued background processing tosend emails for huge amount of subscribers. ( 15000 subscribers )</li>
                            </ul>
                        </WorkExperienceItem>
                        <WorkExperienceItem date="Mar 2018 - Aug 2018" title="Web Developer" company="Boraq Group | Istanbul, Turkey">
                            <ul className="ms-4 list-disc flex flex-col gap-1">
                                <li>
                                    Built sparaat portal for car parts exchanging using FuelPhp and Javascript, this platform helps people to match with car parts suppliers inSaudi Arabia, then choose the best price for the car part they want to buy.
                                    <a className="text-slate-900 dark:text-white underline ms-1" href="https://sparaat.com/en" target="_blank">Visit Website</a>
                                </li>
                                <li>Built an API using Laravel for kidsafe mobile app that monitors kids smart phones by theirparents</li>
                            </ul>
                        </WorkExperienceItem>
                        <WorkExperienceItem className="ms-4" date="Oct 2016 - Nov 2017" title="Junior Web Developer" company="Nexo Ajans | Istanbul, Turkey">
                            <p className="ms-4">
                                I was responsible of converting photoshop web ui designs to dynamic web pages using : <br />
                                HTML, CSS, Bootstrap, Javascript, jQuery, Mysql, PHP Laravel Framework and Wordpress CMS.
                            </p>
                        </WorkExperienceItem>
                    </WorkExperience>
                </div>
            </section>
        </>
    )
}