function setWorkingHours(startTime, endTime){
    const start= new Date(startTime);
    const end= new Date(endTime);
    const[startHour, startMinute] = startTime.split(':').map(Number);
    start.setHours(startHour,startMinute,0,0);
    const [endHour, endMinute] =endTime.split(':').map(Number);
    end.setHours(endHour,endMinute,0,0);
    return { start, end};

}


function addExistingAppointment(appointmentStartTime){
   const start= new Data;
   const[startHour, startMinute]= appointmentStartTime.split(':').map(Number);
   start.setHours(startHour, startMinute,0,0);
   const end= new Date(start);
   end.setMinutes(start.getMinutess()+30);
   bookedAppointments.push({
    start: start.toLocateTimeString([],{ hour: '2-digit', minute: '2-digit'});
    end: end.toLocateTimeString([], { hour: '2-digit', minute: '2-digit'}));
    console.log("Appointment added:", ${ start.toLocateTimeString([], { hour: '2-digit', minute: '2-dgit'})})
}