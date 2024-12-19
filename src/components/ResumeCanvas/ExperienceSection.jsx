import SectionHeader from "./SectionHeader";
import Line from "./Line";

function GetDescription() {

}

function ExperienceDetails({experienceForm}) {
    return(
        <div className="flex flex-row justify-between mt-4">
            <div className="">
                <div className="font-bold">
                    {experienceForm.job}
                </div>
                <div className="italic">
                    {experienceForm.company}
                </div>
                <li className="ml-1">
                    {experienceForm.description}
                </li>
            </div>
            <div className="text-right flex-none">
                <div>
                    {experienceForm.startDate} - {experienceForm.endDate}
                </div>
                <div>
                    {experienceForm.location}
                </div>
            </div>
        </div>
    )
}


function ExperienceSection({experienceInfo}) {
    return(
        <div>
            <SectionHeader text={"Experience"}/>
            <Line/>
            {experienceInfo.map((form) => (
            <ExperienceDetails
                key={form.id}
                //id={form.id}
                experienceForm={form}
            />
            ))}
        </div>
    )
}

export default ExperienceSection;