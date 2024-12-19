import Line from './Line';
import SectionHeader from './SectionHeader';

function EducationDetails({educationForm}) {
    return( 
        <div className="flex justify-between mt-4">
            <div>
                <div className="font-bold">
                    {educationForm.schoolName}
                </div>
                <div>
                    {educationForm.degree}
                </div>
            </div>
            <div className="text-right">
                <div>
                    {educationForm.startDate} - {educationForm.endDate}
                </div>
                <div>
                    {educationForm.location}
                </div>
            </div>
        </div>
    )
}


function EducationSection({educationInfo}) {
    return(
        <div>
            <SectionHeader text={"Education"}/>
            <Line/>
            {educationInfo.map((form) => (
            <EducationDetails
                key={form.id}
                //id={form.id}
                educationForm={form}
            />
            ))}
        </div>
    )
}

export default EducationSection;