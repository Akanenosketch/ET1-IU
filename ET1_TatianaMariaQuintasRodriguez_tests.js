def_test = Array(
    //Definición de pruebas para la tabla analysis_preparation
    //  id_analysis_preparation
    Array('analysis_preparation', 'id_analysis_preparation', 1, 'cumple tamaño minimo', false, 'id_analysis_preparation_min_size_NG', 'El campo id_analysis_preparation debe de contener mínimo 1 dígito'),
    Array('analysis_preparation', 'id_analysis_preparation', 2, 'cumple tamaño maximo', false, 'id_analysis_preparation_max_size_NG', 'El campo id_analysis_preparation debe de contener máximo 11 dígitos'),
    Array('analysis_preparation', 'id_analysis_preparation', 3, 'contiene solo digitos', false, 'id_analysis_preparation_formato_NG', 'El campo id_analysis_preparation sólo puede contener números'),
    Array('analysis_preparation', 'id_analysis_preparation', 4, 'es numerico', true, 'id_analysis_preparation_OK', 'Éxito'),
    //  name_analysis_preparation REVISAR
    Array('analysis_preparation', 'name_analysis_preparation', 5, 'cumple tamaño minimo', false, 'name_analysis_preparation_nim_size_NG', 'name_analysis_preparation debe de contener como minimo 8 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 6, 'cumple tamaño maximo', false, 'name_analysis_preparation_max_size_NG', 'name_analysis_preparation no debe de superar los 100 caracteres'),
    Array('analysis_prepraration', 'name_analysis_prepraration', 7, 'no es una cadena en blanco', false, 'name_analysis_prepraration_is_blank', 'name_analysis_preparation no puede contener solo espacios, por favor ponle un valor que se pueda leer'),
    Array('analysis_preparation', 'name_analysis_preparation', 8, 'no tiene acentos, ñ ni simbolos especiales', false, 'name_analysis_preparation_format_NG', 'name_analysis_preparation no puede contener acentos, ni ñs ni ningun tipo de simbolo especial'),
    Array('analysis_preparation', 'name_analysis_preparation', 9, 'es alfabético', true, 'name_analysis_preparation_OK', 'Exito'),
    //description_analysis_preparation REVISAR
    Array('analysis_preparation', 'description_analysis_prepraration', 10, 'cumple tamaño minimo', false, 'description_analysis_min_size_NG', 'description_analysis_preparation debe de tener una longitud minima de 80 caracteres.'),
    Array('analysis_preparation', 'description_analysis_prepraration', 11, 'sumple tamaño maximo', false, 'description_analysis_max_size_NG', 'description_analysis_preparation debe de tener una longitud maxima de 5000 caracteres.'),
    Array('analysis_preparation', 'description_analysis_prepraration', 12, 'No está en blanco (lleno de espacios)', false, 'description_analysis_prepraration_is_blank', 'description_analysis_preparation no puede contener solo espacios, por favor ponle un valor que se pueda leer'),
    Array('analysis_preparation', 'description_analysis_prepraration', 13, 'no tiene acentos ni ñ', false, 'description_analysis_format_NG', 'description_analysis_preparation no puede contener acntos ni ñs.'),
    Array('analysis_preparation', 'description_analysis_prepraration', 14, 'es alfabético', false, 'description_analysis_min_OK', 'Exito'),
    //bib_analysis_preparation REVISAR
    Array('analysis_preparation', 'bib_analysis_preparation', 15, 'cumple tamaño minimo', false, 'bib_analysis_preparation_min_size_NG', 'bib_analysis_preparation debe de tener como minimo 6 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 16, 'cumple tamaño maximo', false, 'bib_analysis_preparation_max_size_NG', 'bib_analysis_preparation debe de tener como maximo 200 caracteres'),
    Array('analysis_preparation', 'bib_anaysis_preparation', 17, 'No está en blanco (sólo espacios)', false, 'bib_analysis_prepraration_is_blank', 'bib_analysis_prepraration no puede contener solo espacios, por favos ponle un valor que se pueda leer'),
    Array('analysis_preparation', 'bib_analysis_preparation', 18, 'Es alfabético', true, 'bib_analysis_prepraration_OK', 'Éxito'),
    //file_analysis_preparation
    Array('analysis_preparation', 'file_analysis_preparation', 19, 'cumple tamaño minimo', false, 'file_analysis_preparation_min_size_NG', 'file_analysis_preparation debe de tener un nombre de minimo 7 caracteres'),
    Array('analysis_preparation', 'file_analysis_preparation', 20, 'cumple tamaño maximo', false, 'file_analysis_preparation_max_size_NG', 'file_analysis_preparation debe de tener un nombre de maximo 100 caracteres'),
    Array('analysis_preparation', 'file_analysis_preparation', 21, 'Es pdf, doc o docx', false, 'file_analysis_preparation_file_extension_NG', 'file_analysis_preparation solo permite archivos en formato pdf o en formatos doc (word 2007) o docx (word 2016-365)'),
    Array('analysis_preparation', 'file_analysis_preparation', 22, 'Tamaño de archivo es menor de 2000000 bytes', false, 'file_analysis_preparation_file_size_NG', 'file_size_preparation sólo permite archivos de hasta 2000000 bytes (20MB)'),
    Array('analysis_preparation', 'file_analysis_preparation', 23, 'no contiene ñ, espacios, acentos ni otro tipo de caracteres', falso, 'file_analysis_preparation_format_NG', 'file_analysis_format debe de tener un nombre que no contenga espacios, acentos, la letra ñ ni ningun tipo de caracter especial'),
    Array('analysis_prepatation', 'file_analysis_preparation', 24, 'Es alfabetico', true, 'file_analsys_preparation_OK', 'Exito'),
    //Definición de tests para la entidad project
    //id_project
    Array('project', 'id_project', 25, 'cumple tamaño minimo', false, 'id_project_min_size_NG', 'id_project debe de tener como minimo 1 digito'),
    Array('project', 'id_project', 26, 'cumple tamaño maximo', 'id_project debe de tener como maximo 11 digitos'),
    Array('project', 'id_project', 27, 'solo contiene digitos', false, 'id_project_format_NG', 'id_project no puede contener letras o simbolos especiales'),
    Array('project', 'id_project', 28, 'es numerico', true, 'id_project_OK', 'Exito'),
    //name_project
    Array('project', 'name_project', 29, 'cumple tamaño minimo', false, 'name_project_min_size_NG', 'name_project debe de tener como minimo 15 caracteres'),
    Array('project', 'name_project', 30, 'cumple tamaño maximo', false, 'name_project_max_size_NG', 'name_project debe de tener como maximo 100 caracteres'),
    Array('project', 'name_project', 31, 'no tiene acentos ni ñ', false, 'name_project_format_NG', 'name_project no pueden contener acentos ni tener la letra ñ'),
    Array('project', 'name_project', 32, 'no sólo son espacios', false, 'name_project_is_blank', 'name_proyect está en blaco por favor introduzca un nombre se pueda ser leido'),
    Array('project', 'name_project', 33, 'es alfabetico', true, 'name_project_OK', 'Exito'),
    //start_date_project
    Array('project', 'start_date_project', 34, 'tiene un día válido', false, 'start_date_project_day_NG', 'El start_date_project introducido tiene el día fuera de rango (30-31 o 28-29 en febrero)'),
    Array('project', 'start_date_project', 35, 'tiene un mes valido', false, 'start_date_project_month_NG', 'El start_date_project tiene un mes no válido (1-12)'),
    Array('project', 'start_date_project', 36, 'tiene un formato dd/mm/aaaa', false, 'start_date_project_format_NG', 'start_date_format debe de tener un formato dd/mm/aaaa'),
    Array('project', 'start_date_project', 37, 'no contiene caracteres incorrectos', false, 'start_date_project_formation_NG', 'start_date_project solo puede contener digitos en el formato (dd/mm/aaaa), no puede contener ningun tipo decaracter'),
    Array('project', 'start_date_project', 38, 'es una fecha valida', true, 'start_date_project_OK', 'Exito'),
    //end_date_project
    Array('project', 'end_date_project', 39, 'tiene un día válido', false, 'end_date_project_day_NG', 'El end_date_project introducido tiene el día fuera de rango (30-31 o 28-29 en febrero)'),
    Array('project', 'end_date_project', 40, 'tiene un mes valido', false, 'end_date_project_month_NG', 'El end_date_project tiene un mes no válido (1-12)'),
    Array('project', 'end_date_project', 41, 'tiene un formato dd/mm/aaaa', false, 'end_date_project_format_NG', 'end_date_format debe de tener un formato dd/mm/aaaa'),
    Array('project', 'end_date_project', 42, 'no contiene caracteres incorrectos', false, 'end_date_project_formation_NG', 'end_date_project solo puede contener digitos en el formato (dd/mm/aaaa), no puede contener ningun tipo decaracter'),
    Array('project', 'end_date_project', 43, 'es una fecha valida', true, 'end_date_project_OK', 'Exito'),
    //responsable_project
    Array('project', 'responsable_project', 44, 'cumple tamaño minimo', false, 'responsable_project_min_size_NG', 'reponsable_project debe de contener como minimo 6 caracteres'),
    Array('project', 'responsable_project', 45, 'cumple tamaño maximo', false, 'responable_project_max_size_NG', 'responable_project debe de temer como maximo 60 caracteres'),
    Array('project', 'responsable_project', 46, 'no son solo espacios', false, 'responsable_project_is _blank', 'responsable_project esta en blanco, por favor introduzca algo legible'),
    Array('project', 'responsable_project', 47, 'es alfabetico',true, 'responsable_project_OK', 'Exito'),
    //organization_project
    //description_project
    //file_project
    Array('project', 'file_project', 19, 'cumple tamaño minimo', false, 'file_project_min_size_NG', 'file_project debe de tener un nombre de minimo 7 caracteres'),
    Array('project', 'file_project', 20, 'cumple tamaño maximo', false, 'file_project_max_size_NG', 'file_project debe de tener un nombre de maximo 100 caracteres'),
    Array('project', 'file_project', 21, 'Es pdf, doc o docx', false, 'file_project_file_extension_NG', 'file_project solo permite archivos en formato pdf o en formatos doc (word 2007) o docx (word 2016-365)'),
    Array('project', 'file_project', 22, 'Tamaño de archivo es menor de 2000000 bytes', false, 'file_project_file_size_NG', 'file_project sólo permite archivos de hasta 2000000 bytes (20MB)'),
    Array('project', 'file_project', 23, 'no contiene ñ, espacios, acentos ni otro tipo de caracteres', falso, 'file_project_format_NG', 'file_project debe de tener un nombre que no contenga espacios, acentos, la letra ñ ni ningun tipo de caracter especial'),
    Array('project', 'file_project', 24, 'Es alfabetico', true, 'file_project_OK', 'Exito'),  
    //code_project
);