import { ChevronLeft, MapPin } from 'lucide-react';
import { EditableText } from '@/components/EditableText';
import { EditableImage } from '@/components/EditableImage';
import { useStudentData } from '@/hooks/useStudentData';
import { useCurrentTime } from '@/hooks/useCurrentTime';
import profilePhoto from '@/assets/profile-photo.png';
import cloudsBg from '@/assets/clouds-bg.png';

const Index = () => {
  const { data, updateField } = useStudentData();
  const { timeString, dateString } = useCurrentTime();

  return (
    <div 
      className="min-h-screen bg-background relative"
      style={{
        backgroundImage: `url(${cloudsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% -25vh',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      <div className="relative z-10 max-w-sm mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <ChevronLeft className="w-6 h-6 text-tiu-red" />
          <h1 className="text-xl font-display font-bold text-black tracking-wide">TIU VIRTUAL</h1>
        </div>

        {/* Time Display */}
        <div className="text-center mb-6">
          <div className="inline-block bg-tiu-pill px-8 py-4 rounded-2xl mb-3">
            <div className="text-4xl font-display font-medium text-black tracking-wider">
              {timeString}
            </div>
          </div>
          <div className="text-tiu-date text-base">
            {dateString}
          </div>
        </div>

        {/* Profile Photo */}
        <div className="flex justify-center mb-8">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <EditableImage
              src={data.profileImage || profilePhoto}
              alt="Foto de perfil"
              onChange={(imageData) => updateField('profileImage', imageData)}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Student Information Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="text-center space-y-4">
            {/* Name */}
            <div className="mb-6">
              <EditableText
                value={data.name}
                onChange={(value) => updateField('name', value)}
                className="text-3xl font-condensed font-semibold text-tiu-student text-center block w-full leading-tight tracking-normal uppercase"
                placeholder="Nombre del estudiante"
                multiline
              />
            </div>

            {/* Student Code */}
            <div className="space-y-1">
              <div className="text-tiu-text text-sm font-medium">Código de alumno:</div>
              <EditableText
                value={data.studentCode}
                onChange={(value) => updateField('studentCode', value)}
                className="text-tiu-text text-lg font-display font-semibold block w-full text-center"
                placeholder="Código"
              />
            </div>

            {/* Banner ID */}
            <div className="space-y-1">
              <div className="text-tiu-text text-sm font-medium">ID Banner:</div>
              <EditableText
                value={data.bannerId}
                onChange={(value) => updateField('bannerId', value)}
                className="text-tiu-text text-lg font-display font-semibold block w-full text-center"
                placeholder="ID Banner"
              />
            </div>

            {/* Career */}
            <div className="pt-4">
              <EditableText
                value={data.career}
                onChange={(value) => updateField('career', value)}
                className="text-tiu-text text-lg font-display font-semibold block w-full text-center"
                placeholder="Carrera"
              />
            </div>

            {/* Campus */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <MapPin className="w-4 h-4 text-tiu-red" />
              <EditableText
                value={data.campus}
                onChange={(value) => updateField('campus', value)}
                className="text-tiu-text text-base font-display font-medium"
                placeholder="Campus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
