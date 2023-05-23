/**
 *下载导出文件
 * @param blob  ：返回数据的blob对象或链接
 * @param tagFileName  ：下载后文件名标记
 * @param fileType  ：文件类 word(docx) excel(xlsx) ppt等
 */
export function downloadExportFile(blob, tagFileName, fileType) {
    let downloadElement = document.createElement('a');
    let href = blob;
    if (typeof blob == 'string') {
        downloadElement.target = '_blank';
    } else {
        href = window.URL.createObjectURL(blob); //创建下载的链接
    }
    downloadElement.href = href;
    downloadElement.download = tagFileName + moment(new Date().getTime()).format('YYYYMMDDhhmmss') + '.' + fileType; //下载后文件名
    document.body.appendChild(downloadElement);
    downloadElement.click(); //点击下载
    document.body.removeChild(downloadElement); //下载完成移除元素
    if (typeof blob != 'string') {
        window.URL.revokeObjectURL(href); //释放掉blob对象
    }
}