##!/usr/bin/env bash

# shellcheck disable=SC2006
rootFolder=`pwd`

function generate_images(){
    # Get first parameter of the function
    directory="${1}"
    for file in $directory
    do
        # Check if current file is a folder
        if [ -d "$file" ]; then
            echo "Directory: $file"
            # Rerun generate_images and scan for image files again
            generate_images "${1}/*"
        else
            # If image file found convert to small resolution
            fileParts=(${file//./ })
            path=${fileParts[0]}
            extension=${fileParts[1]}
            pathParts=(${path//// })
            fileName=${pathParts[${#pathParts[@]} - 1]}

            # generate correct file name without full path
            resizedFileName=$fileName"-small."$extension

            initialFileName=$fileName"."$extension
            echo "\n-------------------------------------------------"
            echo "- Initial file: ""$initialFileName"
            echo "- Resized file name: ""$resizedFileName"
            echo "- Current directory: ""$rootFolder"
            targetFolder=$rootFolder$path
            resizedFileNameAbsolutePath=$targetFolder"-small."$extension

            if echo "$initialFileName" | grep 'small'; then
                echo "- Skip this file."
            else
                echo "- Convert ..."
                echo "- Absolute path to resized file name: ""$resizedFileNameAbsolutePath"
                convert "$file" -resize 640x400 "$resizedFileNameAbsolutePath"
                echo "- Done."
            fi
            echo "-------------------------------------------------"
      fi
  done
}

generate_images './public/img/root/*'                     # Start image conversions from root folder
